import React, { Component } from 'react';
import countries from './../countries.json';
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
  render() {
    return (
      <div className="singleCountry">
        {this.state.country && (
          <div className="singleCountry">
            {/* <h1>{this.state.country.name.common}</h1>
            <div>
              <p>Capital: {this.state.country.capital}</p>
              <p>Currency: {this.state.country.currency}</p>
              <p>
                Region: {this.state.country.region},{' '}
                {this.state.country.subregion}
              </p>
            </div> */}
            <h1>{this.state.country.name.common}</h1>
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
                        return <li key={border}>{border}</li>;
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
