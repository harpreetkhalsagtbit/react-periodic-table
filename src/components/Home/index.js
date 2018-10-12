import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div>
        <p>Hello World of React and Webpack!</p>
        <p>
            <Link to="/">Home</Link>
        </p>
        <p>
            <Link to="/history">History</Link>
        </p>
        <p>
            <Link to="/alchemy">alchemy</Link>
        </p>
        <p>
            <Link to="/podcast">podcast</Link>
        </p>
        <p>
            <Link to="/video">video</Link>
        </p>
        <p>
            <Link to="/trends">trends</Link>
        </p>
      </div>
  );
};

export default Home;