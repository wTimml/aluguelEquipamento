import React from 'react';
import '../Modal/styles.css'

const Modal = ({ id = "modal" , onClose = () => {}, children }) => {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) {
      onClose();
    }
  }
  return <div>
    <div id={id} className="modal" onClick={handleOutsideClick}>
        <div className="content">{children}</div>
    </div>
  </div>
};

export default Modal;