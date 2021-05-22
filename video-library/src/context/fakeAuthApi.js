// Database
export const user = {
    username: "sakshi",
    password: "jain"
  };
  
  export const fakeAuthApi = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Is done on the server
        // Server calls the DB to get this data
        // And then return based on the DB's result
        if (username === user.username && password === user.password) {
          resolve({ success: true, status: 200 });
        }
        reject({ success: false, status: 401 });
      }, 3000);
    });
  };
  