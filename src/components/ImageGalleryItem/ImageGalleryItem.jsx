import React from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({id, src, alt, largeImg, getLargeImg, toggleModal})=> {
  render() {
    const { image, toggleModal } = this.props;
    return (
      <GalleryItem key={id} onClick={() => toggleModal(image)}>
        <GalleryItemImage src={src} alt={alt}  onClick ={()=>{
           getLargeImg(largeImg);
           toggleModal(); 
        }}/>
      </GalleryItem>
    );
  }
}