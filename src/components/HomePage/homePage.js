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
import Iframe from 'react-iframe';
import '../HomePage/style.css'
import { useMediaQuery } from 'react-responsive'



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
    }



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

      <div style={{ marginLeft: 200, width: 400, marginTop: 90 }}>
        <h1>Software</h1>
        <br />
        <h1>development and UI</h1>
        <br />
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
      <div id="About Us" style={{ backgroundColor: "#DBE0F1", paddingBlockEnd: 15, paddingBlockStart: 15, paddingLeft: 100, paddingRight: 100 }}>
        <h1 align="center" style={{ color: "#004170" }}>About Us</h1>
        <p>About content of aUXtomate technologies and its vison and mission. In left side image is added
        to replicate the vison and misson of company.Our mission is: "To develop customized software
        of best quality as sharp and quick solutions to the corporate". aUXtomate Technologies has
        expertise in providing website solutions, web applications and eCommerce Solutions to the
        existing and new clients. We also provide online marketing solutions and Search Engine
        Optimization to increase client's revenue.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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


      <div id="Our Products" style={{ backgroundColor: "#DBE0F1", paddingBlock: 15, paddingLeft: 10, marginTop: 17 }}>
        <h1 align="center" style={{ color: "#004170 " }}>Our Products</h1>
        <br />
        <div style={{ marginLeft: 125 }}>
          <h2>Workplace Covid Management Solution</h2>

          <br />
          <div>
            <div>
              <img style={{ marginRight: 100 }} className="float-right" src="/images/comp.PNG" alt="" height="200x" width="400px"></img>
            </div>
            <div>
              <p style={{ marginRight: 500, paddingRight: 100 }}>Our Workplace COVID Management solution is
              designed to equip companies in making informed
              data driven decisions and initiate preventive
              measures around their workforce and operations in
              real time for a post corona world.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.</p>{" "}

              <Button backgroundColor="#004170">
                know more    </Button>
            </div>
            <br />
            <div>
              <h2 style={{ marginLeft: 500 }}>Automated analysis of Web application</h2>
              <br />
              <img className="float-left" src="/images/comp2.PNG" alt="" height="200px" width="400px"></img>
            </div>
            <div >
              <p style={{ marginLeft: 500, marginRight: 100 }}>Our ML learns your application, quickly
              diagnosing test failures across a number of different dimensions ranging from visual and temporal
              anomaly to full root cause analysis.real time for a post corona world.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Button backgroundColor="#004170" style={{ marginLeft: 500, marginBottom: 17 }} >
                know more    </Button>
            </div>
          </div>

        </div>
      </div>
      <div>


        <div id="What we do" style={{ paddingBlock: 15, paddingLeft: 10 }}>
          <h1 align="center" >What we do?</h1>
          <br />
          <div style={{ marginLeft: 125, marginTop: 10 }}>
            <b> <h2>Custom software development </h2></b>

            <div>
              <div>
                <img style={{ marginRight: 200 }} className="float-right" src="/images/comp3.PNG" alt="" height="200x" width="400px"></img>
              </div>
              <div>
                <div style={{ marginRight: 200, flexBasis: 100 }}>We design, create, deploying and maintaining
                software for a specific set of users, functions or organization.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                <Button backgroundColor="#00417" style={{ marginTop: 10 }}>
                  know more    </Button>
              </div>

              <div>

                <b> <h2 style={{ marginLeft: 400, marginTop: 10 }}>UX Design Solution </h2></b>


                <img className="float-left" src="/images/comp4.PNG" alt="" height="200x" width="400px"></img>
              </div>
              <div >
                <div style={{ marginRight: 100, marginLeft: 50 }}>We misconceptions about what you do,
                conducting research under time and budget constraints, deciding which problem to solve, briding the gap
                between design and development.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <Button backgroundcolor="#004170" style={{ marginTop: 10, marginBottom: 17 }} >
                  know more    </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className={classes.solid}></div>
      <div id="Our Clients" style={{ marginLeft: 100, marginRight: 100, marginTop: 17 }}>

        <h1 align="center" style={{ color: "004170" }}>Our Clients</h1>
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
      <div className={classes.solid} style={{ marginBottom: 17 }}></div>

      <Reactstrap.CardGroup>
        <card className="block-example border border-dark" style={{ marginBottom: 17, marginLeft: 25 }}>
          <CardContent>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1483016753223!2d78.4072534143839!3d17.500432704142323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c23427e381%3A0x7ec826b06addf631!2s2-22-114%2F1%2C%20Navodaya%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1608294752141!5m2!1sen!2sin"
              width="600" height="500" frameborder="0" aria-hidden="false" tabindex="0" />
          </CardContent>
        </card>
        <card className="block-example border border-dark" style={{ marginLeft: 400, marginBottom: 17, marginLeft: 15 }}>
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

              id="outlined-full-width"
              label="Email Address"
              style={{ margin: 20 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <br />

            <TextField

              id="outlined-full-width"
              label="Messages"
              style={{ margin: 20 }}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <Button size-lg="true" backgroundcolor="#004170" style={{ marginTop: 10 }} >
              <h5> Submit</h5>    </Button>

          </CardContent>

        </card>
      </Reactstrap.CardGroup>
      <div marginTop="10">
        <Paper class="shadow-lg p-3 mb-10 bg-white rounded" variant="outlined" alt="150x75" className="block-example border border-dark" style={{ marginLeft: 10, marginRight: 10 }}>
          <h1 style={{ color: "#003CB5", textAlign: "center", paddingLeft: 350, paddingRight: 350, marginTop: 20, paddingBlockEnd: 20, marginLeft: 10, marginRight: 10 }}>Do you have any design idea?
Push here to get started!!</h1>
          <Button backgroundcolor="#00417" style={{ Align: "center", marginLeft: 550, marginTop: 20 }} size-lg="true">
            <h2>Get Started </h2>  </Button>
        </Paper>

      </div>

    </>

  );
}


export default HomePage;