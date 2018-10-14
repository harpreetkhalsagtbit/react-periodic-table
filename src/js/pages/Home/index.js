import React, { Fragment } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PeriodicTable from "../../components/PeriodicTable";
const Home = props => {
  console.log("rendering...");
  return (
    <Fragment>
      <Header />
      <main>
        <p>Hello World of React and Webpack!</p>
        <PeriodicTable />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
