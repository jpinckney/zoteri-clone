import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FrontPage from './components/frontpage/FrontPage'
import AboutZ from './components/about/AboutZ'
import WhyZ from './components/about/WhyZ'
import HowToMeasure from './components/measurements/HowToMeasure'
import ContactUs from './components/infomenu/ContactUs'
import FAQ from './components/infomenu/FAQ'
import TermsOfService from './components/infomenu/TermsOfService'
import Privacy from './components/infomenu/Privacy'
import Login from './components/customerLogin/Login'
import Shop from './components/shop/Shop'




export default function Routes(){
  
    return (
      <Switch>
        <Route exact path='/' component={ FrontPage } />
        <Route path='/shop/:category' component={ Shop } />
        <Route path='/aboutZ' component={ AboutZ } />
        <Route path='/whyZ' component={ WhyZ } />
        <Route path='/howtomeasure' component={ HowToMeasure } />
        <Route path='/login' component={ Login } />
        <Route path='/contactus' component={ ContactUs } />
        <Route path='/faq' component={ FAQ } />
        <Route path='/termsofservice' component={ TermsOfService } />
        <Route path='/privacy' component={ Privacy } />
      </Switch>

    )

}
