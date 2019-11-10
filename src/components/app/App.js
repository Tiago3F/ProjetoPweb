import React from 'react';
import './App.css';
import Search from '../search/Search';
import Results from '../results/Results';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              alt=""
              src="popcorn.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />
            {' Meu Filme Minha Vida '}
          </Navbar.Brand>
        </Navbar>

        <div className="s130">
          <form>
            <div className="inner-form">
              <div className="input-field first-wrap">
                <div className="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </div>
                <input name="title" id="title" type="text" placeholder="What movie are you looking for?" />
              </div>
              <Search />
            </div>
            <span className="info">ex. Alien, Guardians Of The Galaxy, O Auto da Compadecida</span>
            <br /><br /><br />
            <div id="result">
              <Results />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
