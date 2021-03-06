import React, { useState, Container, Row, Col } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-scroll'
import { faMapMarkerAlt, faPhone, faEnvelopeSquare } from '@fortawesome/fontawesome-free-solid'
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
      <footer  >
        <div >
          <h2 style={{ marginLeft: 50, marginTop: 2, paddingTop: 20 }}> <a href="/" class="text-white" >aUXtomate Technologies</a> </h2>
        </div>
        <section class="ft-main">

          <div class="ft-main-item">

            <ul>
              <li><a href="/terms-and-condiition" class="text-white">Terms and Conditions</a></li>
              <li><a href="/privacy-policy" class="text-white">Privacy Policy</a></li>
              <li><a href="/consultation" class="text-white">Consultation</a></li>
              <li><a href="/faq" class="text-white">FAQ</a></li>
              <li><a href="/site-map" class="text-white">Sitemap</a></li>
            </ul>
          </div>
          <div class="ft-main-item">

            <ul>
              <li>
                <Link to="About Us" class="text-white " marginTop="10"  >About US</Link>
              </li>
              <li>
                <Link to="Our Characteristics" class="text-white">Our Characteristics</Link>
              </li>
              <li>
                <Link to="Our Products" class="text-white">Our Products</Link>
              </li>
              <li>
                <Link to="What we do" class="text-white">What we do?</Link>
              </li>
              <li>
                <Link to="Our Clients" class="text-white">Our Clients</Link>
              </li>

            </ul>
          </div>
          <div class="ft-main-item">

            <ul>
              <li class="text-white">

                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 5 }} />

                    aUXtomate Technologies pvt ltd

              </li>


              <li class="text-white" style={{ marginLeft: 19 }} >
                F-909, 2/22/114/C,
              </li>
              <li class="text-white" style={{ marginLeft: 19 }}>
                Navodaya colony, Kukatpally,
              </li>
              <li class="text-white" style={{ marginLeft: 19 }}>
                Hyderabad-500072
              </li>


              <li class="text-white">
                <FontAwesomeIcon icon={faEnvelopeSquare} style={{ marginRight: 5 }} />
                info@auxtomate.com</li>
              <li class="text-white">
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: 4 }} />

                 96260XXXXX
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">Stay Updated</h2>
            <p class="text-white">Subscribe to our newsletter to get our latest news.</p>
            <form>
              <input type="email" name="email" placeholder="Enter email address" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </section>


        <section class="ft-social">

        </section>

        <section class="ft-legal">
          <ul class="ft-legal-list" right>
            <a class="text-white"> © 2020 aUXtomate Technologies. All Right Reserved. Design and Developed by aUXtomate Technologies.
   </a>

            <li style={{ marginRight: 230 }}><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-github"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
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

          </ul>
        </section>
      </footer>
    </>

  );
}


export default Footer;