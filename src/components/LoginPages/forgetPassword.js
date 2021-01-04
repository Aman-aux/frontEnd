import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { InputBase } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { Row } from 'react-bootstrap';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import SignUp from "./signUp";
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row } from 'react-bootstrap';
import Model from 'react-model';





function LogIn() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        donodsfbsodifnsidn</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  left: {
    backgroundRepeat: 'no-repeat',
    backgroundColor: "#004170",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  black: {
    color: "black",
  },
  inputBase: {
    border: "2px solid #004170",
    borderRadius: theme.shape.borderRadius,
    height: "4vh",
    padding: theme.spacing(2)
  }

}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root} style={{ marginTop: 86 }}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={6} className={classes.left}>
        <div align='center'>
          <h1 style={{ color: 'white', marginTop: "10%" }}>aUXtomate Technologies</h1>
          <h2 style={{ color: 'white', }}>Automated usability Analysis</h2>
          <h3 style={{ color: 'white', }}> cloud hosted,community powered</h3>

        </div>
        <div align='center' className={classes.bottom}>
          <text> <p style={{ color: 'white', marginTop: "28%" }}>aUXtomate Technologies
        <p>blah blah blah</p>
            <p>blah blah blah</p>
            <p>blah blah blah blah blah blah</p>
          </p>
          </text>
        </div>

      </Grid>
      <Grid item xs={10} sm={6} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <h1 style={{ color: '#004170' }}>Reset <span className={classes.black}>Password</span> </h1>


          <form className={classes.form} noValidate>


            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                </Grid>
                <Grid item>
                  <TextField id="password" label="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              {/* <Grid container spacing={1} alignItems="flex-end"> */}

              <br />
              <Grid item>
                <Row>
                  {/* <b>Reset Password</b> */}
                  <TextField id="confirmPassword" label="confirmPassword"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Row>
              </Grid>
              {/* </Grid> */}
            </div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <br />
            <Button variant="contained" height="3hv" color="primary" aria-label="contained primary button group"
              type="sumbit"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <li><Link to="/Signup">New User</Link></li>
              </Grid>
            </Grid>
            <Box mt={5}>
              <LogIn />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}