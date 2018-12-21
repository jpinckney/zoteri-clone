import React, { Component } from 'react'
import axios from 'axios'

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }


  componentDidMount() {
    let { category } = this.props.match.params
    axios.get(`/display?category=${category}`).then(results => {
      this.setState({ products: results.data })
    })
  }

  componentDidUpdate(prevProps) {
    let { category } = this.props.match.params
    if (category !== prevProps.match.params.category) {
      console.log('fired')
      axios.get(`/display?category=${category}`).then(results => {
        this.setState({ products: results.data })
        console.log(results.data)
      })
    }
  }



  render() {
    // const {products} = this.state

    return (
      <div>
        { this.props.match.params.category }
      </div>
    )
  }
}
