import PropTypes from 'prop-types';

import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <>
      <ImageGalleryStyled>
        {images.map(({ id, webformatURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              alt={tags}
              onClick={onClick}
              id={id}
            ></ImageGalleryItem>
          );
        })}
      </ImageGalleryStyled>
    </>
  );
};

ImageGallery.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
