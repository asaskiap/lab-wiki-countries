import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class nav extends Component {
  render() {
    return (
      <nav>
        <h1>
          {' '}
          <Link to="/">Wiki Countries</Link>
        </h1>
      </nav>
    );
  }
}

export default nav;
