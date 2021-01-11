import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LogIn from "../components/login";
import signUp from "../components/LoginPages/signUp";
import ResetPassword from "../components/LoginPages/resetPassword";
import HomePage from '../components/HomePage/homePage';
import aboutus from '../components/HomePage/aboutUs';
import Service from '../components/HomePage/services';
import Support from '../components/HomePage/support';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/LoginPages/NotFound';
import Consultation from '../components/HomePage/Footerpages/Consultation';
import FAQ from '../components/HomePage/Footerpages/Faq';
import PrivacyPolicy from '../components/HomePage/Footerpages/Privacy Policy';
import SiteMap from '../components/HomePage/Footerpages/Sitemap';
import TermsCondition from '../components/HomePage/Footerpages/Terms and Conditions';
import extra from '../components/extra'


function App() {

  return (
    <div>
      <Header />
      <Switch>

        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/sign-up" component={signUp}></Route>
        <Route exact path="/login" component={LogIn}></Route>
        <Route exact path="/reset-password" component={ResetPassword}></Route>
        <Route exact path="/homepage" component={HomePage}></Route>
        <Route exact path="/about-us" component={aboutus}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route exact path="/support" component={Support}></Route>
        <Route exact path="/extra" component={extra}></Route>
        <Route path="/consultation" component={Consultation} />
        <Route path="/faq" component={FAQ} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/site-map" component={SiteMap} />
        <Route path="/terms-and-condiition" component={TermsCondition} />
      </Switch>
      <Footer />
    </div>
  )
}
export default App;