import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';

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
      { date: '19-2-2021', itemName: 'Small fuel bottle', amount: 3, amount: '12' },
      { date: '19-2-2021', itemName: 'Large fuel bottle', amount: 1 },
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
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Price (€)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>{historyRow.itemName}</TableCell>
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
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
  createData('Breda Yacht Supplies', '19-2-2021', 'Queen', 'Breda', '8.75'),
  createData('Amsterdam Boat Shop', '19-2-2021', 'Queen', 'Breda', '8.75'),
  createData('Breda Yacht Supplies', '19-2-2021', 'Queen', 'Breda', '8.75'),
  createData('Breda Yacht Supplies', '19-2-2021', 'Queen', 'Breda', '8.75'),
  createData('Breda Yacht Supplies', '19-2-2021', 'Queen', 'Breda', '8.75'),
];

export default function Dashboard() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#eee',
      minHeight: '100vh',
      paddingTop: '90px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      borderRadius: '10px',
      width: '100%',
      maxWidth: '1100px',
      background: 'white',
      padding: '30px',
      margin: 'auto',
    },
    paper: {
      boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
    },
    appBar: {
      color: 'white!important',
      background: 'black',
      boxShadow: '0 0px 0px 0px rgba(255, 255, 255, .0)!important',
    },
    navIcon: {
      color: 'white!important',
    },
    toolbar: theme.mixins.toolbar,
    tableRow: {
      fontSize: '12px!important',
    },
  }));

  const classes = useStyles();

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
          <IconButton href="/home/dashboard" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <DashboardIcon className={classes.navIcon} />
          </IconButton>
          <IconButton href="/" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <PowerSettingsNewIcon className={classes.navIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
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
                  <TableCell align="right">Amount (€)</TableCell>
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
  );
}
