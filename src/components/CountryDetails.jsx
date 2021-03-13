import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';
class CountryDetails extends Component {
  state = {
    country: null,
  };

  componentDidMount() {
    this.loadCountry();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadCountry();
    }
  }

  loadCountry() {
    const country = countries.find(
      (item) => item.cca3 === this.props.match.params.id
    );
    console.log(country);
    this.setState({
      country: country,
    });
  }
  findCountryNameByCode(code) {
    return countries.find((item) => item.cca3 === code).name.common;
  }
  render() {
    return (
      <div className="singleCountry">
        {this.state.country && (
          <div className="singleCountry">
            <h1>{this.state.country.name.common}</h1>
            <img
              src={`https://www.countryflags.io/${this.state.country.cca2.toLowerCase()}/flat/64.png`}
              alt={this.state.country.name.common}
            ></img>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{this.state.country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {this.state.country.area}km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {this.state.country.borders.map((border) => {
                        return (
                          <li key={border}>
                            <Link to={`/${border}`}>
                              {this.findCountryNameByCode(border)}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default CountryDetails;
