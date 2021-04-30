import React, { useState } from "react";
import "./PlaylistModal.css";
import { useVideo } from "../../context/VideoContext";
import { v4 as uuidv4 } from "uuid";

function PlaylistModal({ videoId }) {
  const { state, dispatch } = useVideo();
  const { playlist, videos } = state;
  const [form, setForm] = useState("");

  console.log(form);

  return (
    <div className="model-wrapper">
      <div className="modal-header">
        <h4>PLaylists</h4>
        <span className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h3>MY PLAYLIST</h3>
          {playlist.length > 0
            ? playlist.map(({ name}) => (
                <div>
                  <p>
                    {name}
                    <input  type="checkbox" 
                    onChange={() =>
                      dispatch({type: "ADD_TO_PLAYLIST" })
                    }
                    />
                  </p>
                </div>
              ))
            : null}
        </div>
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
                  videos: [videoId],
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
  );
}

export default PlaylistModal;
