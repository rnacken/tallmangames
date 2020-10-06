import React from 'react';
import Styles from './footer.module.sass';
import SharedStyles from '../../styles/shared.module.sass';

interface Props {
  buildTime: string;
}

const Footer: React.FC<Props> = ({ buildTime }) => {
  return (
    <section className={Styles.footer}>
      <div className={SharedStyles.container}>
        <p>Any feedback or questions welcome on: <a href="mailto:how@are-you.nl" target="_blank">how@are-you.nl</a></p>
        <p>&copy; {new Date().getFullYear()}</p>
        <br />
        <h6>build: {buildTime}</h6>
      </div>
    </section>
  );
}

export default Footer;