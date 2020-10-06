import Head from "next/head";
import marked from 'marked';

import Game from '../components/game/game';
import Header from '../components/header/header';
import Intro from '../components/intro';
import Footer from '../components/footer';

import { GameType } from '../types/types';
import SharedStyles from '../styles/shared.module.sass';
import { parseHtmlButtons } from '../helpers';

interface Props {
  games: GameType[];
  buildTime: string;
}

const Home: React.FC<Props> = ({ games, buildTime }) => {
  if (!games) {
    return <p>Games loading...</p>;
  }

  return (
    <div>
      <Head>
        <title>Tall Man Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Intro content={'hullo'} />
      <div className={SharedStyles.container}>
        {games.map((game, i) => <Game key={game.id} game={game} variant={i % 2 === 0 ? 'image-left' : 'image-right'} />)}
      </div>
      <Footer buildTime={buildTime} />
    </div>
  );
}
export default Home;


export async function getStaticProps() {
  // get content from trello-api
  require('dotenv').config();
  const {
    TRELLO_BOARD_URL = 'https://trello.com/b/sNLkF0Wv/tallmangames.json',
    TRELLO_LIST_ID = '5f7a26e7d553d910fc8900f8',
    BRANCH
  } = process.env;

  const games = await fetch(TRELLO_BOARD_URL)
    .then(resp => resp.json())
    .then(json => json.cards)
    .then(cards => cards.filter(card => card.idList == TRELLO_LIST_ID && !card.closed && card.labels.filter(label => (
      label.name.toLowerCase() == 'live' ||
      label.name.toLowerCase() == BRANCH
    )).length)
      .map(({ id, name, desc, attachments }) => ({
        id,
        name,
        desc: parseHtmlButtons(marked(desc)),
        img: attachments.length ? attachments[0].url : undefined
      }))
    );

  return {
    props: {
      games,
      buildTime: `${new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' })} (${process.env.BRANCH})`
    },
  };
}
