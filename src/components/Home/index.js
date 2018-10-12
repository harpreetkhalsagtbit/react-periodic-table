import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header'
import Footer from '../Footer';
const Home = () => {
  return (
      <div>
        <Header/>
        <p>Hello World of React and Webpack!</p>
        <Footer/>
      </div>
  );
};

export default Home;