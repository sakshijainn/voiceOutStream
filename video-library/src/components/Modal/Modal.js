import React,{useState} from 'react'
import "./Modal.css"
import { useVideo } from "../../context/VideoContext";
import { v4 as uuidv4 } from "uuid";
function Modal(props) {
    const { state, dispatch } = useVideo();
    const { playlist, videos } = state;
    const [form, setForm] = useState("");
  
    console.log(form);
    const { show, closeModal } = props;
    return (
        <>
        <div  className={show ? "overlayy" : "hide"} onClick={closeModal} />
          <div className={show ? "modal" : "hide"}>
            <button className="closse" onClick={closeModal}>X</button>
            <h1>My PlayList</h1>
            <div className="modal-body">
            {playlist.length > 0
              ? playlist.map(({ name}) => (
                  <div>
                    <p>
                      {name}
                      <input  type="checkbox"
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
                    videos: [],
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
    )
}

export default Modal
