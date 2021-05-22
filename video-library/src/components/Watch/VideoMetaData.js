import React, { useEffect, useState } from "react";
import "./VideoMetaData.css";
import { useVideo } from "../../context/VideoContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
function VideoMetaData() {
  const {
    state: { playlist, videos },
    dispatch,
  } = useVideo();

  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const { id } = useParams();
  const videoMetaDataDetails = videos.find((video) => video.id === id);

  console.log(videoMetaDataDetails);

  return (
    <div className="videometadata">
      <div className="top">
        <h4>{videoMetaDataDetails.title}</h4>
        <div>
          <div>
            <p className="infoP">
              {videoMetaDataDetails.views} . {videoMetaDataDetails.timestamp}
            </p>
          </div>
          <div class="btn-container">
            <Link to="/liked-videos">
              <button onClick={() => dispatch({ type: "LIKE", payload: id })}>
                like
              </button>
            </Link>

            <Link to="/watchList">
              <button
                onClick={() => dispatch({ type: "WATCH_LATER", payload: id })}
              >
                Watch <i class="fa fa-clock-o" aria-hidden="true"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="middle">
        <div className="image-div">
          <div>
            {" "}
            <img className="iconn" src={videoMetaDataDetails.imageSrc}></img>
          </div>
          <div class="subscriber-content">
            <h5>{videoMetaDataDetails.channel}</h5> <h5>10k Subscribers</h5>
          </div>
        </div>
        <div>
          {!show && <button onClick={openModal}>Save</button>}
          <Modal closeModal={closeModal} show={show} videoId={id} />
        </div>
      </div>
    </div>
  );
}

export default VideoMetaData;
