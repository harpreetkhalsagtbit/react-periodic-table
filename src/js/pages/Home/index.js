import React, { Fragment } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PeriodicTable from "../../components/PeriodicTable";
import Styles from "../../../css/Home.css";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHoverActive: false
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main onMouseOver={this.onMouseOver}>
          <div className={Styles.homePageLogo}>
            <img
              src="http://sod-a.rsc-cdn.org/www.rsc.org/periodic-table/content/images/periodic-table-logo.png"
              alt="Royal Society of Chemistry - Periodic table"
            />
          </div>
          <PeriodicTable />
          <div className={Styles.container}>
            <span className={Styles.appDownloadText}>
              Download our free Periodic Table app for mobile phones and
              tablets.
            </span>
            <span>
              <a href="https://itunes.apple.com/app/periodic-table/id1019468967?ls=1&amp;mt=8">
                <img
                  alt="App store"
                  title="App store"
                  src="http://sod-a.rsc-cdn.org/www.rsc.org/periodic-table/content/Images/app_store_img.png?6.2.0.0"
                />
              </a>
            </span>
            <span>
              <a href="https://play.google.com/store/apps/details?id=org.rsc.periodictable&amp;hl=en_GB">
                <img
                  alt="Google play"
                  title="Google play"
                  src="http://sod-a.rsc-cdn.org/www.rsc.org/periodic-table/content/Images/google_play_img.png?6.2.0.0"
                />
              </a>
            </span>
          </div>
          <div className={Styles.socialbarContainer}>
            <a
              href="http://www.rsc.org/learn-chemistry/newsletter"
            >
              &nbsp;
            </a>
            <a
              href="http://www.rsc.org/learn-chemistry/feedback"
            >
              &nbsp;
            </a>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
