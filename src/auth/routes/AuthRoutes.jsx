import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const AuthRoutes = () => {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Register Page */}
      <Route path="/register" element={<RegisterPage />} />

      {/* Redirect to standar route: "LoginPage" */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

export default AuthRoutes;
