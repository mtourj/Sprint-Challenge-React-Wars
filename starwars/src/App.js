import React, { Component } from "react";
import Character from "./components/Character";
import PageSelect from "./components/PageSelect";
import "./App.css";

class App extends Component {
  state = {
    starwarsChars: [],
    currentPage: 0,
    resPerPage: 5
  };

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  advancePage = modifier => {
    this.setState({currentPage: this.state.currentPage + modifier});
  }

  setResPerPage = async event => {
    await this.setState({resPerPage: parseInt(event.target.value)})
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="char-list">
        <PageSelect
            advancePage={this.advancePage}
            length={this.state.starwarsChars.length}
            curPage={this.state.currentPage}
            resPerPage={this.state.resPerPage}
            setResPerPage={this.setResPerPage}
          />
          {this.state.starwarsChars.map((character, index) => {
            if(index >= (this.state.resPerPage * this.state.currentPage) + this.state.resPerPage)
              return;
            if(index < this.state.resPerPage * this.state.currentPage)
              return;
            
            return <Character character={character} key={character.name} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
