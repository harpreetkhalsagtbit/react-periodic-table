import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Home = () => {
  return (
      <div>
        <Header/>
        <p>Podcast Page</p>
        <p>
            <Link to="/">Home</Link>
        </p>
        <Footer/>
      </div>
  );
};

export default Home;