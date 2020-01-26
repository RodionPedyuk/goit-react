import React from 'react';
const ImageGalleryItem = ({ src, id, openModal }) => (
  <li className="ImageGalleryItem">
    <img
      onClick={openModal}
      src={src}
      id={id}
      alt="der"
      className="ImageGalleryItemImage"
    />
  </li>
);

export default ImageGalleryItem;
