import React, { useState, Container, Row, Col } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-scroll'
import { faMapMarker, faPhone, faEnvelopeSquare } from '@fortawesome/fontawesome-free-solid'
import HomePage from '../components/HomePage/homePage'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";


function Footer(params) {

  const UseStyles = makeStyles((theme) => ({

    solid1: {
      borderTop: "3px solid #ffffff",
      marginLeft: 50,
      marginRight: 50,
    }


  }));



  const classes = UseStyles();


  return (
    <>


      <div className="main-footer">
        <div >
          <div>

            <div>
              <div>
                <a href="/" style={{ color: "white", marginLeft: 55, marginTop: 17, position: 'relative' }}><b >aUXtomate Technologies</b>  </a>

              </div>
            </div>
          </div>
        </div>
        <div class="container p-4" style={{ position: 'relative' }}>

          <div class="row">

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/TermsCondition" class="text-white"><b>Terms and Conditions</b></a>
                </li>
                <li>
                  <a href="/PrivacyPolicy" class="text-white"><b>Privacy Policy</b></a>
                </li>
                <li>
                  <a href="/Consultaion" class="text-white"><b>Consultation</b></a>
                </li>
                <li>
                  <a href="/FAQ" class="text-white"><b>FAQ</b></a>
                </li>
                <li>
                  <a href="/sitemap" class="text-white"><b>Sitemap</b></a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0" style={{ cursor: "pointer" }}>

              <ul class="list-unstyled mb-0">
                <li>
                  <Link to="About Us" class="text-white" marginTop="10"  ><b>About US</b></Link>
                </li>
                <li>
                  <Link to="Our Characteristics" class="text-white"><b>Our Characteristics</b></Link>
                </li>
                <li>
                  <Link to="Our Products" class="text-white"><b>Our Products</b></Link>
                </li>
                <li>
                  <Link to="What we do" class="text-white"><b>What we do?</b></Link>
                </li>
                <li>
                  <Link to="Our Clients" class="text-white"><b>Our Clients</b></Link>
                </li>

              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

              <ul class="list-unstyled mb-0">
                <li class="text-white" >
                  <b>
                    <FontAwesomeIcon icon={faMapMarker} />

                    aUXtomate Technologies pvt ltd
        </b>

                </li>
                <li class="text-white">
                  <b> F-909, 2/22/114/C,</b>
                </li>
                <li class="text-white">
                  <b>  Navodaya colony, Kukatpally,</b>
                </li>
                <li class="text-white">
                  <b>  Hyderabad-500072</b>
                </li>
                <li class="text-white">
                  <FontAwesomeIcon icon={faPhone} />

                  <b> 96260XXXXX</b>
                </li>

                <li class="text-white">
                  <FontAwesomeIcon icon={faEnvelopeSquare} />
                  <b>info@auxtomate.com</b></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0" className={classes.social}>
              <div className="social-container">
                <a
                  href="#!"
                  className="facebook social"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>

                <a
                  href="#!"
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                  href="#!"
                  className="twitter social"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  href="#!"
                  className="youtube social"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              </div>

            </div>

          </div>

        </div>
        <div className={classes.solid1}></div>
        < div class="text-left p-3" style={{ marginLeft: 60 }}>
          <a class="text-white"> © 2020 aUXtomate Technologies. All Right Reserved. Design and Developed by aUXtomate Technologies.
   </a>
        </div>
      </div>
    </>

  );
}


export default Footer;


