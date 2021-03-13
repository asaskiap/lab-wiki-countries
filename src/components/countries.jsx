import React, { Component } from 'react';
import countries from './../countries.json';
import { BrowserRouter, Link } from 'react-router-dom';

class Countries extends Component {
  state = {
    countries: countries,
  };
  render() {
    return (
      <div className="countryList">
        <h1>List of Countries</h1>
        <ul>
          {this.state.countries.map((country) => (
            <li key={country.cca3}>
              <Link to={'/' + country.cca3}>{country.name.common}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Countries;
