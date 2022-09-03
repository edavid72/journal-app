import { Face } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  List,
  ListItemIcon,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import SideBarItem from './SideBarItem';

const SideBar = ({ drawerWidth }) => {
  //* Display Name on SideBar
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <ListItemIcon>
            <Face fontSize="large" />
          </ListItemIcon>
          <Typography variant="h5" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {notes.map((note) => {
            return <SideBarItem key={note.id} {...note} />;
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
