import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import  videosInfo from "../database/videosInfo";
import videoReducer from "../Reducer/videoReducer";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(videoReducer, {
    videos: [],
    likedVideos:[],
   
  });

  useEffect(
    () => dispatch({ type: "DATA_FROM_SERVER", payload: videosInfo.videos }),
    []
  );

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  return useContext(VideoContext);
}





 

