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


export default class ResetPassword extends React.Component {
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



    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof input["password"] !== "undefined") {

      var pattern1 = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
      if (!pattern1.test(input["password"])) {
        isValid = false;
        errors["password"] = "password should contain one uppercase one lowercase one special character and one integer";
      }
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
            <text> <p style={{ color: 'white', marginTop: 300 }}>aUXtomate Technologies
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
              marginTop: 200,
              margin: '0',
              width: '300px'
            }} noValidate onSubmit={this.handleSubmit}>

              <h2 style={{ color: '#004170', marginLeft: 10, marginTop: 100 }}>Reset <span style={{ color: "black" }}>Password</span> </h2>

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

              <Box mx="auto" bgcolor="background.paper">
                <Button borderRadius={55} variant="contained" color="primary"
                  type="sumbit"
                  value="Submit"

                  style={{ margin: "theme.spacing(1, 0, 2)", marginTop: 20 }}                >
                  Reset Password
            </Button>
              </Box>
              <Grid container>
                <Grid item style={{ marginLeft: 100, marginTop: 30 }}>

                  <b>  <Link href="/login"> Back to Login</Link></b>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item style={{ marginLeft: 30, marginTop: 30 }}>

                  <b>Don’t have an account? <Link href="/SignUp">Sign up here</Link></b>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}