import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'


class Footer extends Component {
  render() {
    return (
      <div className='footer_infomenu'>
        <ul> Help
<hr />
          <li className='noliststyle'><Link to='/contactus'>Contact us</Link></li>
          <li className='noliststyle'><Link to='/faq'>FAQ</Link></li>
          <li className='noliststyle'><Link to='/termsofservice'>Terms of Service</Link></li>
          <li className='noliststyle'><Link to='/privacy'>Privacy</Link></li>
        </ul>
        <ul> Shop
          <li className='noliststyle'><Link to='/shop/suits'>Suits</Link></li>
          <li className='noliststyle'><Link to='/shop/jackets'>Jackets</Link></li>
          <li className='noliststyle'><Link to='/shop/pants'>Pants</Link></li>
          <li className='noliststyle'><Link to='/shop/vests'>Vests</Link></li>
          <li className='noliststyle'><Link to='/shop/shirts'>Shirts</Link></li>
          <li className='noliststyle'><Link to='/shop/shoes'>Shoes</Link></li>
          <li className='noliststyle'><Link to='/shop/fabrics'>Fabrics</Link></li>
        </ul>
      </div>
    );
  }
}

export default Footer;