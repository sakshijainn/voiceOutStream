import React, { useState } from "react";
import "./Modal.css";
import { useVideo } from "../../context/VideoContext";
import { v4 as uuidv4 } from "uuid";
function Modal({ show, closeModal, videoId }) {
  const { state, dispatch } = useVideo();
  const { playlist } = state;
  const [form, setForm] = useState("");

  console.log(playlist);

  const checkHandler = (e, playlistID, videoId) => {
    dispatch({ type: "ADD_TO_PLAYLIST", payload: { playlistID, videoId } });
  };

  const findVideo = (videoId, videosAdded) => {
    return videosAdded.some((val) => val === videoId);
  };

  return (
    <>
      <div className={show ? "overlayy" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <button className="closse" onClick={closeModal}>
          X
        </button>
        <h1>My PlayList</h1>

        
        <div className="modal-body">
          {playlist.length > 0
            ? playlist.map(({ id, name, videosAdded }) => (
                <div style={{display:"inline"}} key={id}>
                <p>
                {name}
                <input
                type="checkbox"
                onChange={(e) => checkHandler(e, id, videoId)}
                checked={findVideo(videoId, videosAdded)}
              />
                </p>
                 
                 
                </div>
              ))
            : null}
        </div>
        <div className="modal-footer">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              onChange={(e) => {
                setForm(e.target.value);
              }}
              required
            />
            <button
              onClick={() =>
                dispatch({
                  type: "CREATE_NEW_PLAYLIST",
                  payload: {
                    id: uuidv4(),
                    name: form,
                    videosAdded: [],
                  },
                })
              }
              className="btn"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
