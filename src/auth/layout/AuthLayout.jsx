import { Grid, Typography } from '@mui/material';
import React from 'react';

const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: 'white.main',
          padding: 3,
          borderRadius: 3,
          width: { sm: 500 },
        }}
      >
        <Typography
          variant="h5"
          sx={{ marginBottom: 2, color: 'primary.main', fontWeight: 'bold' }}
        >
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
