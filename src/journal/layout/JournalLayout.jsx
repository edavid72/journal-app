import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const JournalLayout = ({ children }) => {
  const drawerWidth = 340;
  return (
    <Box
      sx={{ display: 'flex' }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      {/* NavBar */}
      <NavBar drawerWidth={drawerWidth} />
      {/* SideBar */}
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
