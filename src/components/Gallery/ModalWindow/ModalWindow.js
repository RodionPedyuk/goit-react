import React from 'react';

const Modal = ({ id, object, handleKeyPress, handleClick }) => {
  window.addEventListener('keyup', handleKeyPress);
  return (
    <div className="Overlay" onClick={handleClick} id={id}>
      <div className="Modal">
        <img src={object.webformatURL} alt="sfcw" />
      </div>
    </div>
  );
};

export default Modal;
