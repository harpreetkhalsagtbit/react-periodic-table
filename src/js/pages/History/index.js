import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import Footer from '../../components/Footer';

const Home = () => {
  return (
      <div>
        <Header/>
        <p>History Page</p>
        <p>
            <Link to="/">Home</Link>
        </p>
        <Footer/>
      </div>
  );
};

export default Home;