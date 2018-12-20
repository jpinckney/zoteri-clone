import React, { Component } from 'react'

export default class ContactUs extends Component {
  render() {
    return (
      <div>
      <h1>Contact Us</h1>

      <h2>Feel free to contact us anytime, we are happy to assist!</h2>

      <h3><a href='/'>Book an appointment</a></h3>

      <h3>Our Information</h3>
      <ul>
        <li class='noliststyle'>Call Us: (385)336-7097</li>
        <li class='noliststyle'>Email: support@zoteri.com</li>
        <li class='noliststyle'>Order Email: orders@zoteri.com</li>
      </ul>

      <h3>Zoteri Hours:</h3>
      <ul>
        <li class='noliststyle'>Mon-Fri: 8am-5pm MST</li>
        <li class='noliststyle'>Sat: 9am-5pm MST</li>
        <li class='noliststyle'>Sun: Closed</li>
      </ul>


      </div>
    )
  }
}
