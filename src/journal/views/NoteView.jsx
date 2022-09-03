import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from '../../hooks/useForm';
import { setActiveNote } from '../../store/journal/journalSlice';
import {
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from '../../store/journal/thunks';
import ImageGallery from '../components/ImageGallery';

const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  // create reference to another button and hide a button
  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Note was updated', messageSaved, 'success');
    }
  }, [messageSaved]);

  const handleSaveNote = () => {
    dispatch(startSaveNote());
  };

  //Upload Images
  const onFileInputChange = (e) => {
    if (e.target.files === 0) return;

    console.log('Uploading Files');
    dispatch(startUploadingFiles(e.target.files));
  };

  // Delete a note
  const handleDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ marginBottom: 1 }}
      alignItems="center"
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          color="primary"
          sx={{ padding: 1, margin: 1, fontSize: 20 }}
          onClick={handleSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, marginRight: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          placeholder="Enter a Title"
          label="Title"
          name="title"
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', marginBottom: 1 }}
          fullWidth
        />

        <TextField
          type="text"
          variant="filled"
          multiline
          placeholder="What happened today?"
          label="What happened today?"
          name="body"
          value={body}
          onChange={onInputChange}
          fullWidth
          minRows={5}
        />
      </Grid>

      <Grid container justifyContent="end">
        <Button
          sx={{ marginTop: 2 }}
          color="error"
          variant="outlined"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Grid>

      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};

export default NoteView;
