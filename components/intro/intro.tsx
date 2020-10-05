import React from 'react';
import Styles from './intro.module.sass';
import SharedStyles from '../../styles/shared.module.sass';

interface Props {
  content: string;
}

const Intro: React.FC<Props> = ({ content }) => {
  return (
    <section className={Styles.intro}>
      <div className={SharedStyles.container}>
        <p>Tall Man games produces smart, quick and fun boardgames. It is run by Ru Nacken‑van der Rest, a freelance frontend webdeveloper and aspiring boardgame designer.</p>
        <p>You can reach me at <a href="mailto:how@are-you.nl" target="_blank">how@are-you.nl</a></p>
      </div>
    </section>
  );
}

export default Intro;