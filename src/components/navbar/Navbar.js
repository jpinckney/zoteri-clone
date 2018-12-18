import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Routes from '../../routes'

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <Link to='/'><button class='dropbtn'>Go Home</button></Link>
        <div class="dropdown">
          <button class="dropbtn">Shop</button>
          <div class="dropdown-content">
            <Link to='/products/suits'>Suits</Link>
            <Link to='/products/jackets'>Jackets</Link>
            <Link to='/products/pants'>Pants</Link>
            <Link to='/products/vests'>Vests</Link>
            <Link to='/products/shirts'>Shirts</Link>
            <Link to='/products/shoes'>Shoes</Link>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">About</button>
          <div class="dropdown-content">
            <Link to='/aboutZ'>About Zoteri</Link>
            <Link to='/whyZ'>Why Zoteri</Link>
          </div>
        </div>

        <Link to='/howtomeasure'><button class="dropbtn">How To Measure</button></Link>
        <button class="dropbtn">Login</button>
        
        <Routes />
      </div>
    )
  }
}



