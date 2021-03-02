import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AccountForm from './AccountForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

function Copyright() {
  return (
    <div style={{ paddingBottom: '50px', color: '#999' }}>
      <Typography variant="body2" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Bunkermate
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    background: 'black',
    color: 'white',
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
  },
  root: {
    minHeight: '100vh',
    background: '#eeeeee',
  },
  layout: {
    width: 'auto',
    paddingTop: '60px',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .3)!important',
    padding: '12px 24px!important',
    borderRadius: '50px',
    color: 'white',
    padding: '10px 40px',
    fontSize: '13px',
    background: '#2E5263',
    '&:hover': {
      background: "#214454",
    },
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Information', 'Payment details', 'Vessel information'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AccountForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Bunkermate
                </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Sign up
                </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Welcome to Bunkermate.
                        </Typography>
                  <Typography variant="subtitle1" style={{fontSize: '14px'}}>
                    We have sent you an email to confirm your signup, please use the link in the email to verify your account. In the meantime, you can already access your account by
                         <Link href="/home/">
                      {" following this link"}
                    </Link>
                  </Typography>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Complete Signup' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    </div>
  );
}