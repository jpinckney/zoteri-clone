import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Routes from '../../routes'
import picfornow from '../../smallzoteri.png'


export default class Navbar extends Component {

  render() {
    return (
      <div>
        <div className='navLogo'>
    <Link to='/'><img src={picfornow} alt="zoteri logo"/></Link>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Shop</button>
          <div className="dropdown-content">
            <Link to='/products/suits'>Suits</Link>
            <Link to='/products/jackets'>Jackets</Link>
            <Link to='/products/pants'>Pants</Link>
            <Link to='/products/vests'>Vests</Link>
            <Link to='/products/shirts'>Shirts</Link>
            <Link to='/products/shoes'>Shoes</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">About</button>
          <div className="dropdown-content">
            <Link to='/aboutZ'>About Zoteri</Link>
            <Link to='/whyZ'>Why Zoteri</Link>
          </div>
        </div>

        <Link to='/howtomeasure'><button className="dropbtn">How To Measure</button></Link>
        
        <Link to='/login'><button className="dropbtn">Login</button></Link>
        
      </div>
    )
  }
}



