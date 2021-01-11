import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import InputAdornment from "@material-ui/core/InputAdornment";
import GoogleLogin from "react-google-login";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EmailIcon from '@material-ui/icons/Email';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import GoogleLogin from 'react-google-login';
import axios from 'axios'
import Modal from '..//components/LoginPages/forgetPassword';


function LogIn() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        www.auxtomate.com
</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({


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
    marginTop: '10px',
    margin: '0',

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
  },


}));

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '6rem', height: '2rem' },
}



export default function LogInSide() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = response => {
    setName(response.profixleObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.url)
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const validationSchema = Yup.object().shape({

    Name: Yup.string()
      .required(' Name is required'),

    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),

    acceptTerms: Yup.bool()
      .oneOf([true], 'Accept Ts & Cs is required')
  });

  // functions to build form returned by useForm() hook
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema)
  });

  function onSubmit(data) {
    // display form data on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
  }


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
      <Grid item xs={12} sm={6} md={6} align="center" marginTop="10%" component={Paper}>
        <div className={classes.paper} style={{ align: "center", marginLeft: 60 }}>


          <h2 style={{ color: '#004170', marginBottom: 10 }}>Sign <span className={classes.black}>In</span> </h2>

          <div>
            <br />
            <GoogleLogin
              clientId="327370878003-pqgo77iu9i703k6q1ad4hitrrtk08hag.apps.googleusercontent.com"
              buttonText="Sign In with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            <br />
            <br />
            <b style={{ color: "black" }}>OR</b>
          </div>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <div>
              <TextField
                name="Name"
                type="text"
                ref={register}
                className={`form-control ${errors.Name ? 'is-invalid' : ''}`}
                style={{ marginTop: 30, marginLeft: 30 }}
                label="UserName"
                // placeholder="UserName"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
                id="input-with-icon-textfield"

              />
              <div className="invalid-feedback">{errors.Name?.message}</div>
            </div>
            <br />
            <br />
            <div>
              <TextField
                style={{ marginTop: 20, marginLeft: 30 }}
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Password"
                name="password" type="password" ref={register} className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                // placeholder="Password"
                border-color="#004170"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRoundedIcon />
                    </InputAdornment>
                  )
                }}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <br />
            <Box mx="auto" bgcolor="background.paper" p={1}>
              <Button mx="auto" {...defaultProps} borderRadius={55} variant="contained" color="primary" aria-label="contained primary button group"
                type="submit"
                className={classes.submit}
              >
                Sign In
            </Button>
            </Box>
            <Grid container>
              <Grid item>
                <b variant="outlined" color="primary" autoFocus onClick={handleClickOpen}>
                  Forget Password?
      </b>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Forget Password</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please enter your registered mail id
          </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        )
                      }} className={classes.margin}

                    />

                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                      Reset Password
          </Button>
                  </DialogActions>
                </Dialog>

              </Grid>
              <Grid item xs="6">

                <Link href="/sign-up">New User</Link>

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




