import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Trending from "./components/Trending/Trending";
import Watch from "./components/Watch/WatchVideo";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import Liked from "./components/Liked/Liked";
import WatchLater from "./components/WatchLater/WatchLater";
import HistoryComp from "./components/History/HistoryComp";
import PlaylistContainer from "./components/Playlist/PlaylistContainer";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp/SignUp"
function App() {
  return (
    <div className="app">
      <Header />
        <Routes>
          <Route path="/watch/:id" element= {<Watch/>}></Route>
          <Route path="/history" element ={ <HistoryComp />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element = {<SignUp/>}></Route>
          <PrivateRoute path="/playlist" element={<PlaylistContainer/>}></PrivateRoute>
          <Route path="/watchList" element={<WatchLater />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/liked-videos" element={<Liked />}> </Route>
          <Route path="/home" element={<Main />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
