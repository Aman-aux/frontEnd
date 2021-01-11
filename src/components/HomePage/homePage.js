import React from 'react';
import * as Reactstrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { Paper } from '@material-ui/core'
import Card from "../HomePage/Card";
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import Carousel from 'react-elastic-carousel';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CardContent from '@material-ui/core/CardContent';
import MessageIcon from '@material-ui/icons/Message';
import EmailIcon from '@material-ui/icons/Email';
import Iframe from 'react-iframe';
import '../HomePage/style.css'
import { useMediaQuery } from 'react-responsive'
import TextareaAutosize from 'react-autosize-textarea';



function HomePage(params) {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

  const UseStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margintop: 10,
        marginLeft: 50,
        marginRight: 50,
        width: theme.spacing(500),
        height: theme.spacing(30),
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: theme.spacing(4, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

    },

    solid: {
      borderTop: "1px solid #004170",
      marginLeft: 75,
      marginRight: 75
    },
    solid1: {
      borderTop: "3px solid #ffffff",
      marginLeft: 50,
      marginRight: 50,
    },
    left: {
      backgroundRepeat: 'no-repeat',
      backgroundcolor: "#004170",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    form: {
      width: '50%', // Fix IE 11 issue.
      marginTop: '10px',
      margin: '0',

    },

    margin: {
      margin: theme.spacing(5),
    },
    shadow: {
      paperShadow: "3px 3px 5px 6px #ccc",  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
    },


  }));


  const div = {
    color: "white",
    backgroundcolor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];

  const classes = UseStyles();


  return (
    <>

      <div style={{ marginLeft: 200, marginRight: 100, marginTop: 90 }}>
        <h1>Software
        development and UI</h1>

        <h1>Design Solutions</h1>
        <br />
       Perform software Development services and UX design
solutions.<br /> <br />Contact us to convert your idea into successful <br /><br />
solutions!!
<br />
        <br />
        <Button>
          Start Your Project
        </Button>

      </div>
      <br />

      <div id="About Us" style={{ backgroundColor: "#DBE0F1", paddingBottom: 20 }}>

        <h1 align="center" style={{ color: "#004170", marginBottom: 20 }}>About Us</h1>
        <div style={{ marginBottom: 20, marginLeft: 50, marginRight: 50 }}>
          <br />
          <div>
            <div className="float-right">

              <img className="float-right" height="200" width="200" src="/images/vision.jpg" alt="vision" ></img>
            </div>
            <div >
              <h2 style={{ marginTop: 20 }}>Vision</h2>
              <p marginTop="10" >Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.</p>{" "}


            </div>
          </div>
          <br />
          <div>

            <b> <h2 style={{ marginTop: 10, display: "inline-flex" }}>Mission </h2></b>

            <img className="float-left" src="/images/mission.jpg" alt="mission" height="150" width="300" style={{ paddingRight: 100 }}  ></img>

            <div marginTop="10">.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>

          </div>

        </div>
      </div>

      <div id="Our Characteristics" style={{ marginLeft: 100, marginRight: 100, marginTop: 17 }}>
        <h1 align="center" style={{ color: "004170" }}>Trusted by 300000+ Users</h1>
        <Carousel className="App" breakPoints={breakPoints}>
          <img src="/images/c1.PNG" />
          <img src="/images/c2.PNG" />
          <img src="/images/c3.PNG" />
          <img src="/images/c4.PNG" />
          <img src="/images/c5.PNG" />
          <img src="/images/c6.PNG" />
          <img src="/images/c7.PNG" />
          <img src="/images/c8.PNG" />
        </Carousel>
      </div>


      <div id="Our Products" style={{ backgroundColor: "#DBE0F1", paddingBlock: 15, paddingLeft: 10, marginTop: 17, marginBottom: 10 }}>
        <h1 align="center" style={{ color: "#004170 " }}>Our Products</h1>
        <br />
        <div style={{ marginBottom: 20, marginLeft: 50, marginRight: 50 }}>
          <br />
          <div>
            <div className="float-right">
              <img className="float-right" height="200" width="200" src="/images/comp.png" alt="vision" ></img>
            </div>
            <div >
              <h2>Workplace Covid Management Solution</h2>
              <p marginTop="10" >Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.</p>{" "}
              <Button backgroundColor="#00417" style={{ marginTop: 10 }}>
                know more    </Button>


            </div>
          </div>
          <br />
          <div>

            <b> <h2 style={{ marginTop: 10, display: "inline-flex" }}>Automated analysis of Web application </h2></b>

            <img className="float-left" src="/images/comp2.png" alt="mission" height="150" width="300" style={{ paddingRight: 100 }}  ></img>

            <div marginTop="10">.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
            <Button backgroundColor="#00417" style={{ marginTop: 10 }}>
              know more    </Button>

          </div>

        </div>
      </div>
      <div>


        <div id="What we do" style={{ paddingBlock: 15, paddingLeft: 10 }}>
          <h1 align="center" >What we do?</h1>
          <br />
          <div style={{ marginBottom: 20, marginLeft: 50, marginRight: 50 }}>
            <br />
            <div>
              <div className="float-right">
                <img className="float-right" height="200" width="200" src="/images/comp3.png" alt="vision" ></img>
              </div>
              <div >
                <h2>Custom software development</h2>
                <p marginTop="10" >Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.</p>{" "}
                <Button backgroundColor="#00417" style={{ marginTop: 10 }}>
                  know more    </Button>


              </div>
            </div>
            <br />
            <div>

              <b> <h2 style={{ marginTop: 10, display: "inline-flex" }}>UX Design Solution</h2></b>

              <img className="float-left" src="/images/comp4.png" alt="mission" height="150" width="300" style={{ paddingRight: 100 }}  ></img>

              <div marginTop="10">.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
              <Button backgroundColor="#00417" style={{ marginTop: 10 }}>
                know more    </Button>

            </div>

          </div>

        </div>

      </div>
      <div style={{ marginTop: 20 }} className={classes.solid}></div>
      <div id="Our Clients" style={{ marginLeft: 100, marginRight: 100, marginTop: 17 }}>

        <h1 align="center" style={{ color: "004170" }}>Our Clients</h1>
        <Carousel className="App" breakPoints={breakPoints}>

          <img src="/images/co1.png" />
          <img src="/images/co2.png" />
          <img src="/images/co3.jpg" />
          <img src="/images/co4.jpg" />
          <img src="/images/co5.png" />
          <img src="/images/co6.jpg" />
          <img src="/images/co7.png" />
          <img src="/images/co8.png" />
        </Carousel>

      </div>
      <div className={classes.solid} style={{ marginBottom: 17 }}></div>

      <Reactstrap.CardGroup>
        <card className="block-example border border-blue" style={{ Width: "50%", marginBottom: 17, marginLeft: 25 }}>
          <CardContent >

            <div class="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1483016753223!2d78.4072534143839!3d17.500432704142323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c23427e381%3A0x7ec826b06addf631!2s2-22-114%2F1%2C%20Navodaya%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1608294752141!5m2!1sen!2sin"
                class="embed-responsive-item" allowfullscreen width="600" height="500" aria-hidden="false" tabindex="0" />
            </div>
          </CardContent>
        </card>
        <card className="block-example border border" style={{ Width: "50%", marginBottom: 17, marginLeft: 15 }}>
          <div className="Iframerwd">
            <CardContent style={{ textAlign: "center" }}>
              <h2><b style={{ color: "#004170" }}>CONTACT US</b></h2>

              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="First Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField

                className={classes.margin}
                id="input-with-icon-textfield"
                label="Last Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />

              <br />

              <TextField


                label="Email Address"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}

              />
              <br />

              <TextField

                id="outlined-full-width"
                label="Messages"
                // marginLeft="100"
                // marginRight="100"
                margin="normal"
                style={{ width: "auto" }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      < MessageIcon />
                    </InputAdornment>
                  ),
                }}


              />
              <br />
              <Button size-lg="true" backgroundcolor="#004170" style={{ marginTop: 20 }} >
                <h5> Submit</h5>    </Button>

            </CardContent>
          </div>
        </card>
      </Reactstrap.CardGroup>
      <div align="center" style={{ paddingBottom: "50" }}>
        <div class="card text-center shadow-lg   bg-white rounded" style={{ justifyContent: "center" }}>

          <div className="card-body " style={{ paddingBottom: 50 }}>
            <h3> <b className="card-text" style={{ color: "#004170" }}>Do you have any design idea? <br />
Push here to get started!!</b></h3>
            <Button backgroundColor="#00417" style={{ marginTop: 10 }}>
              Get Started    </Button>
          </div>
        </div >
      </div>

    </>

  );
}


export default HomePage;