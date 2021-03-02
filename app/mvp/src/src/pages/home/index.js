import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "gatsby";

import { siteMetadata } from '../../../gatsby-config'
const { mapboxToken } = siteMetadata
import Map from 'components/Map';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';

import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const directions = [
  {
    //https://github.com/mapbox/mapbox-gl-directions/blob/master/src/directions.js
    language: 'en-GB',
    accessToken: mapboxToken,
    steps: true,
    exclude: 'toll',
    unit: 'metric',
    alternatives: 'true',
    interactive: true,
    style: 'mapbox://styles/hilaal/ckljf06c40fg817qn2wm03o7l',
    controls: {
      inputs: false,
      instructions: true,
      profileSwitcher: true,
    },
    profile: 'mapbox/driving',
    flyTo: false,
    // custom
    origin: [7.227778, 50.282222],
    destination: [-4.488582, 36.86133],
    pois: [
      [1.81108, 47.069302, 'Koordinate: 1.811080, 47.069302'],
    ],
  },
];

function createData(name, price1, price2, rating) {
  return {
    name,
    price1,
    price2,
    rating
  }
}

const suppliers = [
  //createData('Breda Yacht Suppliers', 2.12, 5.23, 4),
  //createData('Rotterdam Yacht Suppliers', 2.22, 4.23, 3),
  //createData('Amsterdam Boat Suppliers', 2.32, 6.23, 2),
];


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
}));

function Results(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [value, setValue] = React.useState(2);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const supplierList = suppliers.map((supplier) =>
  <Card className={classes.shipper}>
    <Link to="/home/cart" style={{textDecoration: 'none', color: '#666'}}>
      <CardActionArea>
        <CardContent key={supplier}>
          <p className={classes.shipperName}>{supplier.name}</p>
          <p className={classes.shipperDesc}>{supplier.price1} - {supplier.price2} € / Litre</p>
          <p className={classes.shipperRating}>Rating:</p>
          <Box className={classes.paddingLeft} component="fieldset" mb={0} borderColor="transparent">
            <Rating name="read-only" value={supplier.rating} readOnly size="small" />
          </Box>
        </CardContent>
      </CardActionArea>
    </Link>
  </Card>
);

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
          <div className={classes.maps}>
            <Map
              height="400px"
              directions={directions}
            />
          </div>
          <div className={classes.innerContent}>
            <Grid container spacing={3} className={classes.orderforms}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h5" className={classes.dealerHeading}>
                  Find a supplier
                </Typography>
                <Paper component="form" className={classes.searchInput}>
                  <IconButton className={classes.iconButton} aria-label="menu">
                    <RoomIcon />
                  </IconButton>
                  <InputBase
                    className={classes.input}
                    placeholder="Rotterdam Harbour, Rotterdam, Netherlands"
                    inputProps={{ 'aria-label': 'drop off location' }}
                  />
                </Paper>
                <Paper className={classes.paper}>
                  <Link to="/home/results">
                    <Button className={classes.searchBtn} size="large" variant="contained" color="primary">
                      <SearchIcon />
                    </Button>
                  </Link>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h5" className={classes.dealerHeading}>
                  <p style={{fontSize: '14px'}}><strong>Tip:</strong> Use the form on the left to find the available suppliers in the area.</p>
                </Typography>
                {supplierList}
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </div>
  );
}

Results.propTypes = {
  window: PropTypes.func,
};

export default Results;
