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
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  displayName: 'David Cervellon',
  email: 'david.cervellon72@gmail.com',
  password: 'Mateo2319++',
};

const formValidations = {
  displayName: [(value) => value.length >= 1, 'The name is required'],
  email: [
    (value) => value.includes('@'),
    "the '@' is required in the email field",
  ],
  password: [
    (value) => value.length >= 6,
    'The password must contain more than 6 letters',
  ],
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMsg } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status]
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      <h2>{isFormValid ? 'Formulario Valido' : 'Formulario no valido'}</h2>
      <form
        onSubmit={handleSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {/* Form Fields */}
        <Grid container>
          <Grid item xs={12} marginTop={2}>
            <TextField
              type="text"
              label="Name"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              placeholder="Your Name"
              fullWidth
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} marginTop={2}>
            <TextField
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="Your Name"
              fullWidth
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} marginTop={2}>
            <TextField
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="************"
              fullWidth
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          {/* Button's */}
          <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={12} display={!!errorMsg ? '' : 'none'}>
              <Alert severity="error">{errorMsg}</Alert>
            </Grid>

            <Grid item xs={12} marginTop={2}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth
                sx={{ color: 'white.main' }}
              >
                Create an account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography marginRight={1}>
              Do you already have an account?
            </Typography>
            <Link component={RouterLink} to="/auth/login">
              To access
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
