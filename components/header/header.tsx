import React from 'react';

import Styles from './header.module.sass';
import SharedStyles from '../../styles/shared.module.sass'

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <div className={SharedStyles.container}>
        <p>Welcome to</p>
        <h1 title="Tall Man games">
          <img className={Styles.logo} src="/logo-text.png" alt="Tall Man games" />
        </h1>
      </div>
    </header>
  );
}

export default Header;