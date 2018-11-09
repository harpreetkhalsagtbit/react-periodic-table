import React from "react";
import { Link } from "react-router-dom";

import Styles from "../../css/Header.css";
const Header = () => {
  return (
    <header>
      <div className={Styles.container}>
        <ul>
          <li className={Styles.hamburgeMenu}>
            <Link to="/">
              <img
                src="http://sod-a.rsc-cdn.org/www.rsc.org/periodic-table/content/Images/newimages/menu-light-24.png?6.2.0.0"
                width="24"
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link className={Styles.title} to="/">Periodic Table</Link>
          </li>
          <li className={Styles.navItems}>
            <Link to="/">Home</Link>
          </li>
          <li className={Styles.navItems}>
            <Link to="/history">History</Link>
          </li>
          <li className={Styles.navItems}>
            <Link to="/alchemy">alchemy</Link>
          </li>
          <li className={Styles.navItems}>
            <Link to="/podcast">podcast</Link>
          </li>
          <li className={Styles.navItems}>
            <Link to="/video">video</Link>
          </li>
          <li className={Styles.navItems}>
            <Link to="/trends">trends</Link>
          </li>
        </ul>
        <div className={Styles.rscLogo}>
        <Link to="/trends">
          <img
            src="http://sod-a.rsc-cdn.org/www.rsc.org/periodic-table/content/Images/newimages/rsc-online-logo-trans.png?6.2.0.0"
            height="40"
            alt=""
          />
        </Link>
      </div>

      </div>
    </header>
  );
};

export default Header;
