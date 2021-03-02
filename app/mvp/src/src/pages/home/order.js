import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { siteMetadata } from '../../../gatsby-config'
const { mapboxToken } = siteMetadata

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
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
  timeline: {
    margin: 'auto',
    paddingTop: '20px',
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
  dot: {
    background: '#2E5263',
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
  },
  subNavButton: {
    color: '#666!important',
    fontSize: '14px',
  },
  timelinetime: {
    fontSize: '14px',
  },
  timelinestatus: {
    fontSize: '16px'
  },
  innerContainer: {
    padding: '40px',
  },
  papertable: {
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
  },
  orderRow: {
    fontSize: '14px',
  },
  cancelBtn: {
    fontSize: '14px',
    boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
  }
}));

function Order(props) {

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
          <div className={classes.innerContainer}>
            <Grid container spacing={3} className={classes.orderforms}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h5">
                Receipt
                </Typography>
                <div>
                  <p style={{marginBottom: '0'}, {fontSize: '14px'}}>19-2-21 13:44</p>
                  <p style={{marginBottom: '0'}, {fontSize: '14px'}}>Vessel: Queen</p>
                  <div>
                    <Typography variant="h6" component="h6">
                      Breda Yacht Supplies
                    </Typography>
                    <TableContainer className={classes.papertable} component={Paper}>
                      <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Qty</TableCell>
                            <TableCell align="right">Price (€)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.name} className={classes.orderRow}>
                              <TableCell component="th" scope="row" className={classes.orderRow}>
                                {row.name}
                              </TableCell>
                              <TableCell className={classes.orderRow} align="right">{row.calories}</TableCell>
                              <TableCell className={classes.orderRow} align="right">{row.fat}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <Button className={classes.cancelBtn} variant="contained" color="secondary">
                    Cancel Order
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <React.Fragment>
                  <div className={classes.timeline}>
                    <Timeline align="alternate" className={classes.timelineList}>
                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography className={classes.timelinetime} color="textSecondary">09:30 am</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot className={classes.dot} />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography className={classes.timelinestatus}>Requested</Typography>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography className={classes.timelinetime} color="textSecondary">10:00 am</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot className={classes.dot} />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography className={classes.timelinestatus}>Accepted</Typography>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography className={classes.timelinetime} color="textSecondary"></Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot className={classes.dot} />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography className={classes.timelinestatus}>Transit</Typography>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography className={classes.timelinetime} color="textSecondary">9:00 am</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot variant="outlined" />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography className={classes.timelinestatus}>Delivery</Typography>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  </div>
                </React.Fragment>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </div>
  );
}

Order.propTypes = {
  window: PropTypes.func,
};

export default Order;
