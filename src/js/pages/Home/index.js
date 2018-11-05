import React, { Fragment } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PeriodicTable from "../../components/PeriodicTable";

class Home extends React.PureComponent  {
  constructor(props) {
    super(props)
    this.state = {
      isHoverActive:false
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main onMouseOver={this.onMouseOver}>
          <p>Hello World of React and Webpack!</p>
          <PeriodicTable/>
        </main>
        <Footer />
      </Fragment>
    );
  }
};

export default Home;
