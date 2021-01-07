import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LogIn from "../components/login";
import SignUp from "../components/LoginPages/signUp";
import ResetPassword from "../components/LoginPages/resetPassword";
import HomePage from '../components/HomePage/homePage';
import aboutus from '../components/HomePage/aboutUs';
import Service from '../components/HomePage/services';
import Support from '../components/HomePage/support';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/LoginPages/NotFound';
import Consultaion from '../components/HomePage/Footerpages/Consultation';
import FAQ from '../components/HomePage/Footerpages/Faq';
import PrivacyPolicy from '../components/HomePage/Footerpages/Privacy Policy';
import SiteMap from '../components/HomePage/Footerpages/Sitemap';
import TermsCondition from '../components/HomePage/Footerpages/Terms and Conditions';



function App() {

  return (
    <div>
      <Header />
      <Switch>

        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/SignUp" component={SignUp}></Route>
        <Route exact path="/login" component={LogIn}></Route>
        <Route exact path="/ResetPassword" component={ResetPassword}></Route>
        <Route exact path="/homePage" component={HomePage}></Route>
        <Route exact path="/aboutus" component={aboutus}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route exact path="/support" component={Support}></Route>

        <Route path="/Consultaion" component={Consultaion} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route path="/sitemap" component={SiteMap} />
        <Route path="/TermsCondition" component={TermsCondition} />
      </Switch>
      <Footer />
    </div>
  )
}
export default App;