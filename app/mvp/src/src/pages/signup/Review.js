import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vessel Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField id="cardName" label="Vessel name" fullWidth autoComplete="vessel-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="registrationNumber"
            label="Registration number"
            fullWidth
            autoComplete="registration number"
          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}