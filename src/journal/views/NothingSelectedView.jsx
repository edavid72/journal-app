import { SentimentDissatisfied } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 2,
      }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item xs={12}>
        <SentimentDissatisfied sx={{ fontSize: 100, color: '#FFFFFF' }} />
      </Grid>

      <Grid item>
        <Typography sx={{ color: '#FFFFFF', fontSize: '2rem' }}>
          please create an entry
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NothingSelectedView;
