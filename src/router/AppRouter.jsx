import { Navigate, Route, Routes } from 'react-router-dom';
import AuthRoutes from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import JournalRoutes from '../journal/routes/JournalRoutes';
import CheckingAuth from '../ui/components/CheckingAuth';

const AppRouter = () => {
  const { status } = useCheckAuth();

  // Condition
  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      {/* Redirect */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
      {/* Login & Register */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* Principal App: Journal-App */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};

export default AppRouter;
