import React from "react";
import importedComponent from "react-imported-component";

import Home from "./pages/Home";
import Loading from "./components/common/Loading";

const AsyncHistory = importedComponent(
  () => import(/* webpackChunkName:'History' */ "./pages/History"),
  {
    LoadingComponent: Loading
  }
);

export default [
  {
    path: "/",
    exact: true,
    render(props) {
      return <Home {...props} />;
    }
  },
  {
    path: "/history",
    exact: true,
    render(props) {
      return <AsyncHistory {...props} />;
    }
  }
];
