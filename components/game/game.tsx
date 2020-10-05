import React from 'react';

import Styles from './game.module.sass';
import { GameType } from '../../types/types';

interface Props {
  game: GameType;
  variant: 'image-left' | 'image-right';
}

const Game: React.FC<Props> = ({ game, variant = 'image-left' }) => {
  return (<>
    <article className={[Styles.game, Styles[`game--${variant}`]].join(' ')}>
      {game.img && <div className={Styles.image_container}>
        <div className={[Styles.image_backdrop, Styles[`image_backdrop--${variant}`]].join(' ')} />
        <div className={Styles.image} style={{
          backgroundImage: `url(${game.img})`
        }} />
      </div>}
      <div className={Styles.content}>
        <h3>{game.name}</h3>
        <div dangerouslySetInnerHTML={{ __html: game.desc }} />
      </div>
    </article>
  </>);
}

export default Game;