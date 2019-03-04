import React from 'react';
import { Link, } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      This is home.
      <br />
      <Link to="/signin">Go to Sign In</Link>
    </div>
  );
};

export default Home;