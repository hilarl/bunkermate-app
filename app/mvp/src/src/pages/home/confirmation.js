import React from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { siteMetadata } from '../../../gatsby-config'
const { mapboxToken } = siteMetadata

import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HomeIcon from '@material-ui/icons/Home';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Grid from '@material-ui/core/Grid';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    background: '#eeeeee',
    minHeight: '100vh',
    flexWrap: 'wrap',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchInput: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    background: 'white',
    border: '1px solid #eee',
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: '#666',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  cont: {
    background: 'white',
    margin: '0px',
    width: '100%',
    maxWidth: '1100px',
    margin: 'auto',
    marginTop: '20px',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  textField: {
    color: 'white!important',
  },
  navIcon: {
    color: 'white!important',
  },
  appBar: {
    background: 'black',
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    background: 'none',
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
  },
  innerContent: {
    padding: '24px',
  },
  media: {
    height: 140,
  },
  shipper: {
    color: '#666',
    border: '1px solid #eee',
    background: 'white',
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
    marginBottom: '24px',
  },
  shipperName: {
    letterSpacing: '0.5px',
    fontSize: '18px',
    margin: '0',
    marginTop: '6px',
    paddingLeft: '12px',
  },
  shipperDesc: {
    letterSpacing: '0.5px',
    fontSize: '14px',
    margin: '0',
    marginTop: '6px',
    paddingLeft: '12px',
  },
  shipperRating: {
    letterSpacing: '0.5px',
    fontSize: '12px',
    margin: '0',
    marginTop: '6px',
    paddingLeft: '12px',
  },
  paddingLeft: {
    paddingLeft: '8px',
  },
  searchBtn: {
    display: 'block',
    textAlign: 'center',
    width: '100%',
    paddingTop: '12px',
    paddingBottom: '2px',
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
    background: '#2E5263',
    '&:hover': {
      background: "#214454",
    },
    color: 'white!important',
  },
  dealerHeading: {
    fontSize: '24px',
    marginBottom: '24px',
    marginTop: '12px',
  },
  timeline: {
    margin: 'auto',
  },
  timelineList: {
    margin: '0',
  },
  subNav: {
    maxWidth: '1100px',
    margin: 'auto',
    background: 'none',
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
    color: '#000',
  },
  subNavButton: {
    color: '#666!important',
    fontSize: '14px',
  },
  tableRow: {
    fontSize: '12px!important',
  },
  tableFonts: {
    fontSize: '14px',
  },
  tableContain: {
    padding: '30px',
  },
  orderDetail: {
    fontSize: '16px',
    marginBottom: '6px',
    fontWeight: 'bold',
  },
  product: {
    marginBottom: '32px',
  },
  formControl: {
    '&: select': {
      fontSize: '14px'
    }
  },
  orderButton: {
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .3)!important',
    color: 'white',
    padding: '10px 40px',
    fontSize: '13px',
    background: '#2E5263',
    '&:hover': {
      background: "#214454",
    }
  },
  updateButton: {
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .3)!important',
    color: '#333',
    padding: '10px 40px',
    fontSize: '13px',
    background: '#eeeeee',
    '&:hover': {
      background: "#dddddd",
    }
  },
  cancelButton: {
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .3)!important',
    color: 'white',
    padding: '10px 40px',
    fontSize: '13px',
    marginLeft: '12px',
    background: '#222',
    '&:hover': {
      background: "#333",
    }
  },
}));

function Cart(props) {

  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [value, setValue] = React.useState(2);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bunkermate
          </Typography>
          <IconButton href="/home" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon className={classes.navIcon} />
          </IconButton>
          <IconButton href="/" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <PowerSettingsNewIcon className={classes.navIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <AppBar position="static" className={classes.subNav}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">

            </IconButton>
            <Typography variant="h6" className={classes.title}>

            </Typography>
            <Button className={classes.subNavButton} href="/home/" color="inherit">New Order</Button>
            <Button className={classes.subNavButton} href="/home/order/" color="inherit">Current Order</Button>
            <Button className={classes.subNavButton} href="/home/orders/" color="inherit">Past Orders</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.cont}>
          <div className={classes.tableContain}>
            <Grid container spacing={3} className={classes.orderforms}>
              <Grid item xs={12} sm={8}>
                <div>
                  <p className={classes.orderDetail}>Pickup: <span style={{ color: '#999', fontWeight: '300', marginLeft: '10px' }}>Breda Harbour</span> </p>
                  <p className={classes.orderDetail}>Dropoff: <span style={{ color: '#999', fontWeight: '300', marginLeft: '10px' }}>Rotterdam Harbour</span></p>
                  <p className={classes.orderDetail}>Vessel Name:
                    <Select
                      style={{ width: "100px"}, {marginLeft: '14px'}}
                    >
                      <MenuItem value="Queen">Queen</MenuItem>
                    </Select>
                  </p> 
                </div>
                <h3 style={{ marginTop: '42px' }}>Breda Yacht Supplies</h3>
                <h4>Available Products</h4>
                <div className={classes.product}>
                  <h5 style={{ marginBottom: '6px' }}>Original engine oil Solé Diesel</h5>
                  <p style={{ marginBottom: '10px', fontSize: '12px' }}>Multigrade oil specially designed for marine diesel engines and generators. This oil has been specially developed for tough conditions with high loads and extreme temperatures.</p>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">1</InputLabel>
                    <Select
                      style={{ width: "100px" }}
                    >
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.product}>
                  <h5 style={{ marginBottom: '6px' }}>Original engine oil Solé Petrol</h5>
                  <p style={{ marginBottom: '10px', fontSize: '12px' }}>Multigrade oil specially designed for marine diesel engines and generators. This oil has been specially developed for tough conditions with high loads and extreme temperatures.</p>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">1</InputLabel>
                    <Select
                      style={{ width: "100px" }}
                    >
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div style={{paddingTop: '24px'}}>
                  <Link style={{textDecoration: 'none'}}>
                    <Button className={classes.updateButton} variant="contained" color="primary">
                      Update Order
                    </Button>
                  </Link>
                  <Link to="/home/" style={{textDecoration: 'none'}}>
                    <Button className={classes.cancelButton} variant="contained" color="primary">
                      Cancel Order
                    </Button>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <h3>Order Details:</h3>
                <div style={{fontSize: '14px'}}>
                  <p>1 X Original engine oil Solé Petrol</p>
                  <p>1 X Original engine oil Solé Petrol</p>
                </div>
                <h4>Total: $400.00</h4>
                <div>
                  <Link style={{textDecoration: 'none'}} to='/home/order'>
                    <Button className={classes.orderButton} variant="contained" color="primary">
                      Process Order
                    </Button>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </div>
  );
}

Cart.propTypes = {
  window: PropTypes.func,
};

export default Cart;
