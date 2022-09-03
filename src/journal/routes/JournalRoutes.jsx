import { Navigate, Route, Routes } from 'react-router-dom';
import JournalPage from '../pages/JournalPage';

const JournalRoutes = () => {
  return (
    <Routes>
      {/* JournalPage */}
      <Route path="/" element={<JournalPage />} />

      {/* Redirect to standar page: "JournalPage" */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default JournalRoutes;
