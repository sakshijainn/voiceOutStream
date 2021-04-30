import React from "react";
import "./PlaylistModal.css";
function PlaylistModal({ show, closeHandler }) {
  return (
    <div
      className="model-wrapper"
      style={{
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <h4>PLaylists</h4>
        <span className="close-modal-bnt">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Modal</h4>
          <p>it is my playlistdksajksk</p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  );
}

export default PlaylistModal;
