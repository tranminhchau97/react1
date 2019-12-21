import React, { Component } from 'react';
import './../css/App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Content from './body/main_content/Main_content';
import Header from './Header';
import UserData from './User_data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  UNSAFE_componentWillMount() {
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(UserData));
    }
    this.setState({
      data: JSON.parse(localStorage.getItem('userData'))
    });
  }

  render() {
    return (
      <Router className="App">
        <Header />
        <Content dataUser={this.state.data} />
      </Router>
    );
  }
}

export default App;
