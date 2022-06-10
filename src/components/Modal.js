/* eslint-disable no-unused-vars */
import React from "react";
import {default as Alias} from "react-modal";
import PropTypes from "prop-types";
import { XIcon } from "@heroicons/react/solid";

export default function Modal({ children,  isOpen, onRequestClose, contentLabel}) {
  React.useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return(
    <Alias
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <XIcon className="absolute w-7 h-7 p-1 rounded-full bg-secondary-600 text-white hover:scale-110 transition duration-300 -top-2 -right-2 shadow-xl drop-shadow-2xl close-button"
        role="button" 
        onClick={e => onRequestClose()}
      /> 
      <div className="h-full overflow-y-auto rounded-lg" style={{ direction: "rtl" }}>
        <div style={{ direction: "ltr" }}>
          {children}
        </div>
      </div>

    </Alias>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  contentLabel: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}