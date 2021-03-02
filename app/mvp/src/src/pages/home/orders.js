import React from 'react';
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
import DashboardIcon from '@material-ui/icons/Dashboard';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';

const drawerWidth = 240;

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '19-2-2021', itemName: 'Small fuel bottle', amount: 3, price: 5 },
      { date: '19-2-2021', itemName: 'Large fuel bottle', amount: 1, price: 2.4 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{fontSize: '14px'}} component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell style={{fontSize: '14px'}} align="right">{row.calories}</TableCell>
        <TableCell style={{fontSize: '14px'}} align="right">{row.fat}</TableCell>
        <TableCell style={{fontSize: '14px'}} align="right">{row.carbs}</TableCell>
        <TableCell style={{fontSize: '14px'}} align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontSize: '14px'}}>Item Name</TableCell>
                    <TableCell style={{fontSize: '14px'}}>Amount</TableCell>
                    <TableCell style={{fontSize: '14px'}}>Price (€)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell style={{fontSize: '14px'}}>{historyRow.itemName}</TableCell>
                      <TableCell style={{fontSize: '14px'}}>{historyRow.amount}</TableCell>
                      <TableCell style={{fontSize: '14px'}}>
                        {historyRow.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        itemName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Breda Yacht Suppliers', '19-2-2021', 'Queen', 'Breda', '8.75'),
  createData('Rotterdam Yacht Suppliers', '19-2-2021', 'Queen', 'Breda', '8.75'),
  createData('Amsterdam Boat Suppliers', '19-2-2021', 'Queen', 'Breda', '8.75'),
  createData('Hamburg Yacht Suppliers', '19-2-2021', 'Queen', 'Breda', '8.75'),
  createData('Brussels Yacht Suppliers', '19-2-2021', 'Queen', 'Breda', '8.75'),
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
  }
}));

function Orders(props) {

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
          <div className={classes.tableContain}>
            <Typography variant="h5" component="h5" className={classes.dealerHeading}>
              Order History
            </Typography>
            <div className={classes.table}>
              <TableContainer component={Paper} className={classes.paper}>
                <Table aria-label="collapsible table" className={classes.tableRow}>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>Supplier</TableCell>
                      <TableCell align="right">Order Date</TableCell>
                      <TableCell align="right">Vessel</TableCell>
                      <TableCell align="right">Location</TableCell>
                      <TableCell align="right">Total (€)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <Row key={row.name} row={row} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Orders.propTypes = {
  window: PropTypes.func,
};

export default Orders;
