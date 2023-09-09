import PropTypes from 'prop-types';

import {
  ImageGalleryItemStyled,
  GalleryItemImageStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, image, alt, onClick }) => {
  return (
    <ImageGalleryItemStyled>
      <GalleryItemImageStyled
        id={id}
        src={image}
        alt={alt}
        onClick={() => onClick(image)}
      />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
