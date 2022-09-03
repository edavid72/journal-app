import React, { useMemo } from 'react';
import { AssignmentTurnedIn } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const handleClickNote = () => {
    dispatch(setActiveNote({ id, title, body, date, title, imageUrls }));
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 24) + '...' : title;
  }, [title]);
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClickNote}>
        <ListItemIcon>
          <AssignmentTurnedIn />
        </ListItemIcon>
        <Grid container>
          <ListItemText sx={{ width: '100%' }} primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarItem;
