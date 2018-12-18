import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'


class Footer extends Component {
  render() {
    return (
      <div>
        <ul> Help
<hr />
          <li><Link to='/contactus'>Contact us</Link></li>
          <li><Link to='/faq'>FAQ</Link></li>
          <li><Link to='/termsofservice'>Terms of Service</Link></li>
          <li><Link to='/privacy'>Privacy</Link></li>
        </ul>
      </div>
    );
  }
}

export default Footer;