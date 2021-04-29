
  
  export default function videoReducer(state, {
    type,
    payload
  }) {
    switch (type) {
      case "DATA_FROM_SERVER":
        return {
          ...state,
          videos: payload
        };


      case "LIKE":
        {
        console.log(payload);
        return {
          ...state,
          likedVideos: state.likedVideos.includes(payload) ?
            state.likedVideos.filter((id) => id !== payload) :
            state.likedVideos.concat(payload)
        }
      }
      
     

      
      
  
     
  
        default:
          return state;
    }
  }