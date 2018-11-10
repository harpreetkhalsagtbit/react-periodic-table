import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className={Styles.footerSubMenu}>
        <ul className={Styles.breadCumbs}>
          <li>
            <Link to="/">rsc.org</Link>
          </li>
          <li>
            <img
              src="//www.rsc-cdn.org/global/header-footer/images/icons/chevron-right-light.png"
              width="8"
              height="8"
              alt=""
            />
          </li>
          <li>
            <Link to="/">Periodic Table</Link>
          </li>
        </ul>
      </div>
      <div className={Styles.footerMenu}>
        <div className={Styles.container}>
          <div className={Styles.logoWrapper}>
            <img
              src="//www.rsc-cdn.org/global/header-footer/images/rsc-logo-ftr.png"
              width="180"
              height="120"
              alt=""
            />
          </div>
          <div>
            <span>Explore</span>
            <ul className={Styles.listWrapper}>
              <li>
                <Link to="//www.rsc.org/">Home</Link>
              </li>
              <li>
                <Link to="//www.rsc.org/about-us/">About us</Link>
              </li>
              <li>
                <Link to="//www.rsc.org/campaigning-outreach/">
                  Campaigning &amp; outreach
                </Link>
              </li>
              <li>
                <Link to="//www.rsc.org/journals-books-databases/">
                  Journals, books &amp; databases
                </Link>
              </li>
              <li>
                <Link to="//www.rsc.org/news-events/">
                  News&nbsp;&amp; events
                </Link>
              </li>
              <li>
                <Link to="//www.rsc.org/locations-contacts/">
                  Locations &amp; contacts
                </Link>
              </li>
              <li>
                <Link to="//www.rsc.org/awards-funding/">
                  Awards &amp; funding
                </Link>
              </li>
              <li>
                <Link to="//www.rsc.org/advertise/">Advertise</Link>
              </li>
              <li>
                <Link to="//www.rsc.org/help-legal/">Privacy policy</Link>
              </li>
              <li>
                <Link to="//www.rsc.org/help-legal/">
                  Terms &amp; conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span>Membership</span>
            <ul className={Styles.listWrapperTwo}>
              <li>
                <Link to="//www.rsc.org/membership-and-community/">
                  Membership &amp; professional community
                </Link>
              </li>
              <li>
                <Link to="//www.rsc.org/resources-tools/">
                  Resources &amp; tools
                </Link>
              </li>
              <li>
                <Link to="//www.rsc.org/careers/">Careers</Link>
              </li>
              <li>
                <Link to="//www.rsc.org/help-legal/">Help &amp; legal</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={Styles.containerBottom}>
          <div>
            <ul>
              <li>© Royal Society of Chemistry 2018</li>
              <li>Registered charity number: 207890</li>
            </ul>
          </div>
          <div>
            <dt className={Styles.socialIcons}>
              <dl className={Styles.facebook}>
                <Link to="https://www.facebook.com/RoyalSocietyofChemistry">
                  <span>Facebook</span>
                  <img
                    alt="facebook"
                    src="https://www.rsc-cdn.org/global/header-footer/images/icons/facebook.png"
                    height="32"
                    width="32"
                  />
                </Link>
              </dl>
              <dl className={Styles.twitter}>
                <Link to="https://twitter.com/RoySocChem">
                  <span>Twitter</span>
                  <img
                    alt="twitter"
                    src="https://www.rsc-cdn.org/global/header-footer/images/icons/twitter.png"
                    height="32"
                    width="32"
                  />
                </Link>
              </dl>
              <dl className={Styles.linkedin}>
                <Link to="https://www.linkedin.com/company/23105">
                  <span>LinkedIn</span>
                  <img
                    alt="linkedin"
                    src="https://www.rsc-cdn.org/global/header-footer/images/icons/linkedin.png"
                    height="32"
                    width="32"
                  />
                </Link>
              </dl>
              <dl className={Styles.youtube}>
                <Link to="https://www.youtube.com/user/wwwRSCorg">
                  <span>Youtube</span>
                  <img
                    alt="youtube"
                    src="https://www.rsc-cdn.org/global/header-footer/images/icons/youtube.png"
                    height="32"
                    width="32"
                  />
                </Link>
              </dl>
              <dl className={Styles.googleplus}>
                <Link to="https://plus.google.com/113399675911040898889">
                  <span>Google Plus</span>
                  <img
                    alt="googleplus"
                    src="https://www.rsc-cdn.org/global/header-footer/images/icons/googleplus.png"
                    height="32"
                    width="32"
                  />
                </Link>
              </dl>
            </dt>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
