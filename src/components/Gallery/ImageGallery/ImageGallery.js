import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ModalWindow from '../ModalWindow/ModalWindow';
import '../../Styles/Style.css';
const ImageGallery = ({
  images,
  openModal,
  isModalOpen,
  id,
  object,
  handleKeyPress,
  handleClick,
}) => {
  return (
    <>
      {isModalOpen && (
        <ModalWindow
          id={id}
          object={object}
          handleKeyPress={handleKeyPress}
          handleClick={handleClick}
        />
      )}
      <ul className="ImageGallery">
        {images.map(item => (
          <ImageGalleryItem
            key={item.id}
            src={item.webformatURL}
            id={item.id}
            openModal={openModal}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
