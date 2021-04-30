import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Trending from "./components/Trending/Trending";
import Watch from "./components/Watch/WatchVideo";

import LandingPage from "./components/LandingPage/LandingPage";
import Liked from "./components/Liked/Liked";
import WatchLater from "./components/WatchLater/WatchLater";
import HistoryComp from "./components/History/HistoryComp";
import Playlist from "./components/Playlist/Playlist";
function App() {
  
  return (
    <div  className="app">
  <Router>
      
       
       
    <Switch>

       <Route path="/watch/:id">  <Header /><Watch/></Route>
       <Route path="/history"><Header/><HistoryComp/></Route>
       <Route path="/playlist"><Playlist/></Route>
       <Route path="/watchList">  <Header /> <WatchLater/> </Route>
       <Route path="/trending">  <Header /><Trending/></Route>
       <Route path="/liked-videos">  <Header /><Liked/></Route>
       <Route path="/home"><h1>  <Header /><Main /></h1></Route>
       <Route path="/"><LandingPage/></Route>


    </Switch>

  </Router>
    </div>
  );
}

export default App;
