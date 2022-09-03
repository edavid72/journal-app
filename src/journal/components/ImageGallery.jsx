import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageGallery = ({ images }) => {
  return (
    <ImageList
      sx={{ width: '100%', height: 500, marginTop: 4 }}
      variant="quilted"
      cols={6}
      rowHeight={161}
    >
      {images.map((image) => (
        <ImageListItem
          key={image}
          cols={image.cols || 2}
          rows={image.rows || 1}
        >
          <img
            {...srcset(image, 121, image.rows, image.cols)}
            alt="Image note"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageGallery;
