import React from "react";
import { useVideo } from "../../context/VideoContext";
import "./Playlist.css";
import { useParams } from "react-router";

function Playlist() {
  const { state, dispatch } = useVideo();
  const { playlist } = state;
  const { id } = useParams();

  const deleteVideoFromPlaylist = (playlistId, id) => {
    dispatch({
      type: "REMOVE_VIDEO_FROM_PLAYLIST",
      payload: { playlistId, id },
    });
  };



  const deletePlaylist = (id) => {
    dispatch({ type: "DELETE_PLAYLIST", payload: id });
  };

  



  return (
    <div className="recommendedVideos">
      <h2>Playlists</h2>
      <div className="recommendedVideos_video">
        {state.playlist.map(({ id,name, videosAdded }) => {
          return videosAdded.map((videoId) => {
            const check = state.videos.find((video) => video.id === videoId);
             console.log(check)
            return (
              <div className="playlistcard">
                <div className="videoCard">
                  <h3>Playlist Name:{name}</h3>
                  <iframe
                    src={`https://www.youtube.com/embed/${check.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />

                  <div className="video_info">
                    <div className="avatar">
                      <img src={check.imageSrc} alt="" />
                    </div>
                    <div className="video-text">
                      <h4>{check.title}</h4>
                      <p>{check.channel}</p>
                      <p>
                        {check.views}.{check.timestamp}
                      </p>
                    </div>
                  </div>
                  <div className="buttons-container">
                    <button
                      onClick={() => deletePlaylist(id)}
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i> Playlist
                    </button>
                    <button
                      onClick={() =>
                        deleteVideoFromPlaylist(id, check.id)
                      }
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i> Video
                    </button>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Playlist;
