import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar/>
       <div>

       <Footer />
       </div>
      </div>
    );
  }
}

export default App;
