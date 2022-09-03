import { useMemo } from 'react';
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import AuthLayout from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth/thunks';

const formData = {
  email: 'mateo.cervellon2319@gmail.com',
  password: 'mateo2319',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMsg } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm(formData);

  // Disable button login
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  //! Login With {email & password}
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('with email');
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  // Login with Google SignIn
  const onGoogleSignIn = (e) => {
    console.log('Loging With Google SignIn');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={handleSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {/* Form Fields */}
        <Grid container>
          <Grid item xs={12} marginTop={2}>
            <TextField
              fullWidth
              placeholder="my.email@email.com"
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} marginTop={2}>
            <TextField
              fullWidth
              placeholder="************"
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          {/* Button's */}
          <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={12} marginTop={2} display={!!errorMsg ? '' : 'none'}>
              <Alert severity="error">{errorMsg}</Alert>
            </Grid>

            <Grid item xs={12} sm={6} marginTop={2}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
                sx={{ color: 'white.main' }}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} marginTop={2}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                sx={{ color: 'white.main' }}
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography marginLeft={1}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} to="/auth/register">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
