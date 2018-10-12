import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div>
        <span>
            <Link to="/">Home</Link>
        </span>
        <span>
            <Link to="/history">History</Link>
        </span>
        <span>
            <Link to="/alchemy">alchemy</Link>
        </span>
        <span>
            <Link to="/podcast">podcast</Link>
        </span>
        <span>
            <Link to="/video">video</Link>
        </span>
        <span>
            <Link to="/trends">trends</Link>
        </span>
      </div>
  );
};

export default Header;