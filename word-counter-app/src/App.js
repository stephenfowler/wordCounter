import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class WordCountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: '',
      wordCount: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const valueArray = value.match(/\S+/g)
    let count = 0;
    if (!!valueArray){
      count = valueArray.length
    }

    this.setState({
      [name]: value,
      wordCount: count
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label className="Title">
              Text: 
          </label>
        </div>
        <div>
          <textarea 
              placeholder="Enter your text to be word counted here"
          className="Text-area" name="words"
          type="string" value={this.state.words} 
          onChange={this.handleInputChange} />
        </div>
        </form>
        <div>
          <label className="Title">Word Count: </label>
          <span className="Count"> {this.state.wordCount}</span>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Word Counter App Created in React</h1>
        </header>
        <WordCountForm />
      </div>
    );
  }
}

export default App;
