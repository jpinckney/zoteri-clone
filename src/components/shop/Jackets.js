import React, { Component } from 'react'

export default class Jackets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jackets: []
    }
  }
  

  componentDidMount(){
axios.get('/display/jackets')
  }

  render() {
    return (
      <div>
        <h1>Jackets</h1>
      </div>
    )
  }
}
