import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Routes from './routes'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
