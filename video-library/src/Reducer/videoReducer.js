export default function videoReducer(state, { type, payload }) {
  switch (type) {
    case "DATA_FROM_SERVER":
      return {
        ...state,
        videos: payload,
      };

    case "LIKE": {
      console.log(payload);
      return {
        ...state,
        likedVideos: state.likedVideos.includes(payload)
          ? state.likedVideos.filter((id) => id !== payload)
          : state.likedVideos.concat(payload),
      };
    }

    case "WATCH_LATER":
      return {
        ...state,
        watchLater: state.watchLater.includes(payload)
          ? state.watchLater.filter((id) => id !== payload)
          : state.watchLater.concat(payload),
      };

    case "HISTORY":
      return {
        ...state,
        historyVideos: state.historyVideos.some(
          (videoId) => videoId === payload
        )
          ? state.historyVideos
              .filter((videoId) => videoId !== payload)
              .concat(payload)
          : state.historyVideos.concat(payload),
      };

    case "CREATE_NEW_PLAYLIST":
      return { ...state, playlist: [...state.playlist, payload] };

    case "ADD_TO_PLAYLIST":
      const { playlistID, videoId } = payload;

      const singlePlaylist = [...state.playlist].map((onePlaylist) => {
        if (onePlaylist.id === playlistID) {
          const videoFind = !!onePlaylist.videosAdded.find(
            (video) => video === videoId
          );
          if (videoFind) {
            const videoFiltered = onePlaylist.videos.filter(
              (video) => video !== videoId
            );
            return { ...onePlaylist, videosAdded: videoFiltered };
          } else {
            const newPlaylist = {
              ...onePlaylist,
              videosAdded: [...onePlaylist.videosAdded, videoId],
            };
            return newPlaylist;
          }
        }
        return onePlaylist;
      });

      return { ...state, playlist: singlePlaylist };

    case "DELETE_PLAYLIST": {
      const deletePlaylist = [...state.playlist].filter(
        (onePlaylist) => onePlaylist.id !== payload
      );
      return { ...state, playlist: deletePlaylist };
    }

    case "REMOVE_VIDEO_FROM_PLAYLIST": {
      const { playlistId, videoID } = payload;
      console.log("playlistId:", playlistId)
      console.log("videoId",videoID);
      //map playlist :
      const removeVideoFromPlaylist = [...state.playlist].map((onePlaylist)=>{
        //match playlist-ids
        if(onePlaylist.id ===playlistId)
        {
          const filteredVideo = onePlaylist.videosAdded.filter( (video) => video !== videoID );
          return { ...onePlaylist, videosAdded: filteredVideo };
        }
        return onePlaylist;
      })
      return { ...state, playlist: removeVideoFromPlaylist };
      
    }

    case "SEARCH":
      return { ...state, keyword: payload.toLowerCase() };

    case "CLEAR_SEARCH":
      return { ...state, keyword: "" };

    default:
      return state;
  }
}
