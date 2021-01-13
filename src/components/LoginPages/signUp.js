import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { Row } from 'react-bootstrap';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import BusinessIcon from '@material-ui/icons/Business';
import InputAdornment from "@material-ui/core/InputAdornment";
// import GoogleLogin from "react-google-login";
import Radio from '@material-ui/core/Radio';
import { RadioGroup } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import GoogleLogin from 'react-google-login';
import axios from 'axios'


class DocumentInput extends React.Component {
  render() {
    return <TextField
      type="text"
      name="organisation"
      placeholder="organisation"
      id="organisation"
      value={this.state.input.organisation}
      onChange={this.handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <BusinessIcon />
          </InputAdornment>
        )
      }}
      name={`document-${this.props.index}-document`}
    />;
  }
}

export default class signUp extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      documents: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.add = this.add.bind(this);
  }

  add() {
    const documents = this.state.documents.concat(DocumentInput);
    this.setState({ documents });
  }


  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      input["organisation"] = "";
      this.setState({ input: input });

      alert('Demo Form is submited');
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {

      isValid = false;
      errors["name"] = "Please enter your name.";
    }
    if (!input["organisation"]) {

      isValid = false;
      errors["organisation"] = "Please enter your organisation.";
    }
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
      errors["password"] = "password should contain one uppercase one lowercase one special character and one integer";


    }

    if (typeof input["password"] !== "undefined") {

      var pattern1 = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
      if (!pattern1.test(input["password"])) {
        isValid = false;
        errors["password"] = "password should contain one uppercase one lowercase one special character and one integer";
      }
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

      if (input["password"] != input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
        // errors["password"] = "password should contain one uppercase one lowercase one special character and one integer";

      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }
  signup(res) {

    const googleresponse = {
      Name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: 'Google'

    };
    debugger;
    axios.post('http://localhost:60200/Api/Login/SocialmediaData', googleresponse)
      .then((result) => {

        let responseJson = result;

        sessionStorage.setItem("userData", JSON.stringify(result));

        this.props.history.push('/')
      });
  };


  render() {
    const documents = this.state.documents.map((Element, index) => {
      return <Element key={index} index={index} />
    });

    const responseGoogle = (response) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.signup(response);

    }
    return (
      <Grid container component="main" style={{ marginTop: 86 }}>
        <CssBaseline />
        <Grid item xs={12} sm={6} md={6} style={{
          backgroundRepeat: 'no-repeat',
          backgroundColor: "#004170",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div align='center'>
            <h1 style={{ color: 'white', marginTop: 10 }}>aUXtomate Technologies</h1>
            <h2 style={{ color: 'white' }}>Automated usability Analysis</h2>
            <h3 style={{ color: 'white' }}> cloud hosted,community powered</h3>

          </div>
          <div align='center'>
            <text> <p style={{ color: 'white', marginTop: 300, }}>aUXtomate Technologies
        <p>blah blah blah</p>
              <p>blah blah blah</p>
              <p>blah blah blah blah blah blah</p>
            </p>
            </text>
          </div>
          <br />

        </Grid>
        <Grid item xs={12} sm={6} md={6} align="center" component={Paper}>
          <div style={{
            margin: "themeSpacing(4, 4)",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <form style={{
              width: '50%', // Fix IE 11 issue.
              marginTop: '10px',
              margin: '0',
              width: '300px'
            }} noValidate onSubmit={this.handleSubmit}>

              <h2 style={{ color: '#004170', marginLeft: 70 }}>Sign <span style={{ color: "black" }}>Up</span> </h2>
              <div>

                <GoogleLogin
                  clientId="327370878003-pqgo77iu9i703k6q1ad4hitrrtk08hag.apps.googleusercontent.com"
                  buttonText="Sign Up with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle} ></GoogleLogin>
                <br />
                <br />
                <b style={{ color: "black" }}>OR</b>
                <h6 style={{ color: "#000000" }}>Register & apply with your email</h6>
              </div>
              <RadioGroup row aria-label="position">
                <FormControlLabel value="Individual" control={<Radio color="primary" />} label="Individual" />
                <FormControlLabel value="Organisation" control={<Radio color="primary" />} onClick={this.add} label="Organisation" />
              </RadioGroup>
              <div>
                <TextField
                  type="text"
                  name="name"
                  value={this.state.input.name}
                  onChange={this.handleChange}
                  placeholder="Enter name"
                  id="name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}

                />
                <div className="text-danger">{this.state.errors.name}</div>
              </div>

              <br />
              <br />
              <div>
                <TextField

                  type="text"
                  name="organisation"
                  placeholder="organisation name "
                  id="organisation"
                  value={this.state.input.organisation}
                  onChange={this.handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    )
                  }}

                />
                <div className="text-danger">{this.state.errors.organisation}</div>
              </div>
              <br />
              <br />
              <div>
              <TextField
                  type="text"
                  name="email"
                  value={this.state.input.email}
                  onChange={this.handleChange}
                  placeholder="Enter email"
                  id="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ) 
                  }}
                />

                <div className="text-danger">{this.state.errors.email}</div>
              </div>
              <br />
             
              <br />
              <div>
                <TextField

                  type="password"
                  name="password"
                  value={this.state.input.password}
                  onChange={this.handleChange}

                  placeholder="Enter password"
                  id="password"
                
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockRoundedIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <div className="text-danger">{this.state.errors.password}</div>
              </div>
              <br />
              <br />
              <div>
                <TextField

                  type="password"
                  name="confirm_password"
                  value={this.state.input.confirm_password}
                  onChange={this.handleChange}

                  placeholder="Enter confirm password"
                  id="confirm_password"
                  border-color="#004170"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockRoundedIcon />
                      </InputAdornment>
                    )
                  }}
                />

                <div className="text-danger">{this.state.errors.confirm_password}</div>
              </div>
              <FormControlLabel
                require
                control={<Checkbox value="remember" color="primary" />}
                label="I agree to the terms and conditions"
                style={{ color: "#004170" }}

              />
              <Box mx="auto" bgcolor="background.paper">
                <Button borderRadius={55} variant="contained" color="primary"
                  type="sumbit"
                  value="Submit"
                  style={{ margin: "theme.spacing(1, 0, 2)" }}                >
                  Sign Up
            </Button>
              </Box>
              <Grid container>
                <Grid item style={{ marginLeft: 30, marginTop: 20 }}>

                  <b>Already have an account? <Link href="/login">Login</Link></b>
                </Grid>
              </Grid>
              <Box mt={5}>
                <signUp />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}