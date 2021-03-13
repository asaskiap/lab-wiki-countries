import './App.css';
import Nav from './components/nav';
import Countries from './components/countries';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="display">
        <aside>
          <Nav />
        </aside>
        <main>
          <div className="container">
            <Countries></Countries>
            <Route path="/:id" component={CountryDetails} exact />
          </div>
        </main>{' '}
      </div>
    </BrowserRouter>
  );
}

export default App;
