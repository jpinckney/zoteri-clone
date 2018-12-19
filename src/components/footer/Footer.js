import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'


class Footer extends Component {
  render() {
    return (
      <div className='footer_infomenu'>
        <ul className> Help
<hr />
          <li class='noliststyle'><Link to='/contactus'>Contact us</Link></li>
          <li class='noliststyle'><Link to='/faq'>FAQ</Link></li>
          <li class='noliststyle'><Link to='/termsofservice'>Terms of Service</Link></li>
          <li class='noliststyle'><Link to='/privacy'>Privacy</Link></li>
        </ul>
        <ul> Shop
          <li class='noliststyle'><Link to='/products/suits'>Suits</Link></li>
          <li class='noliststyle'><Link to='/products/jackets'>Jackets</Link></li>
          <li class='noliststyle'><Link to='/products/pants'>Pants</Link></li>
          <li class='noliststyle'><Link to='/products/vests'>Vests</Link></li>
          <li class='noliststyle'><Link to='/products/shirts'>Shirts</Link></li>
          <li class='noliststyle'><Link to='/products/shoes'>Shoes</Link></li>
        </ul>
      </div>
    );
  }
}

export default Footer;