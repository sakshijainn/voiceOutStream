
  
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
  
     
  
        default:
          return state;
    }
  }