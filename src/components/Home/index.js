import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header'
import Footer from '../Footer';
import ElementsData from '../../assets/PeriodicTable'
const Home = () => {
  console.log('rendering...')
  return (
      <div>
        <Header/>
        <p>Hello World of React and Webpack!</p>
        <Footer/>
      </div>
  );
};

export default Home;