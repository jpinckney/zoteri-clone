import React, { Component } from 'react'
import axios from 'axios'
// import '../../App.css'

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }


  componentDidMount() {
    console.log(this.props);

    let { category } = this.props.match.params
    axios.get(`/display?category=${category}`).then(results => {
      this.setState({ products: results.data })
    })
  }

  componentDidUpdate(prevProps) {
    let { category } = this.props.match.params
    if (category !== prevProps.match.params.category) {
      console.log(category)
      axios.get(`/display?category=${category}`).then(results => {
        this.setState({ products: results.data })
        console.log(results.data)
      })
    }
  }

  render() {
    const { products } = this.state
    const mappedProducts = products.map(products => {

      return (
        <div className='description'>
          <img src={products.image_url}/>
          <h3>{ products.name }</h3>
          <h4>${ products.price }</h4>
          { products.product_info }
        </div>
      )
    })

    return (
      <div  >
        { mappedProducts }

      </div>
    )
  }
}