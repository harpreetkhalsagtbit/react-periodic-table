import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div>
        <p>Podcast Page</p>
        <p>
            <Link to="/">Home</Link>
        </p>
      </div>
  );
};

export default Home;