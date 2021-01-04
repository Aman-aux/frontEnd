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
import GoogleLogin from "react-google-login";
import Radio from '@material-ui/core/Radio';
import { RadioGroup } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';


export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

      if (input["password"] != input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     height: '100vh',
  //   },

  //   left: {
  //     backgroundRepeat: 'no-repeat',
  //     backgroundColor: "#004170",
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //   },
  //   paper: {
  //     margin: theme.spacing(4, 4),
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main,
  //   },

  //   form: {
  //     width: '50%', // Fix IE 11 issue.
  //     marginTop: '10px',
  //     margin: '0',
  //     width: '300px',

  //   },
  //   submit: {
  //     margin: theme.spacing(1, 0, 2),
  //   },
  //   black: {
  //     color: "black",
  //   },
  //   inputBase: {
  //     border: "2px solid #004170",
  //     borderRadius: theme.shape.borderRadius,
  //     height: "4vh",
  //     padding: theme.spacing(2)
  //   },


  // }));

  // const defaultProps = {
  //   bgcolor: 'background.paper',
  //   borderColor: 'text.primary',
  //   m: 1,
  //   border: 1,
  //   style: { width: '6rem', height: '2rem' },
  // }

  // export default function SignInSide() {
  //   const classes = useStyles();
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [url, setUrl] = useState("");

  //   const responseGoogle = response => {
  //     setName(response.profileObj.name);
  //     setEmail(response.profileObj.email);
  //     setUrl(response.profileObj.url);
  //   }

  //   const { inputs, handleInputChange, handleSubmit, errors } = useForm({ Name: '', email: '', password: '', confirmpassword: '' }, validate);
  render() {
    return (
      <Grid container component="main" style={{ marginTop: 86, height: '100vh' }}>
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

              <h2 style={{ color: '#004170', marginLeft: 0 }}>Sign <span style={{ color: "black" }}>Up</span> </h2>
              <div>
                <GoogleLogin
                  clientId="327370878003-pqgo77iu9i703k6q1ad4hitrrtk08hag.apps.googleusercontent.com"
                  buttonText="Signup with google"
                  // onSuccess={responseGoogle}
                  // onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
                <br />
                <br />
                <b style={{ color: "black" }}>OR</b>
                <h5 style={{ color: "#004170" }}>Register & apply with your email</h5>
              </div>
              <RadioGroup row aria-label="position">
                <FormControlLabel value="Individual" control={<Radio color="primary" />} label="Individual" />
                <FormControlLabel value="Organisation" control={<Radio color="primary" />} label="Organisation" />
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
                  placeholder="Organisation"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    )
                  }}

                />
              </div>
              <br />
              <br />
              <div>
                <TextField
                  type="email"
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
                  border-color="#004170"
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
                <Grid item style={{ marginLeft: 30 }}>

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