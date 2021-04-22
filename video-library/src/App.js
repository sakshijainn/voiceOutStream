import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Trending from "./components/Trending/Trending";
import Watch from "./components/Watch/WatchVideo";

function App() {
  
  return (
    <div  className="app">
  <Router>
        <Header />
       
       
    <Switch>

       <Route path="/watch/:id"><Watch/></Route>
       <Route path="/watchList"> <h1> My watchList </h1> </Route>
       <Route path="/search/:searchTerm"><Search/></Route>
       <Route path="/trending"><Trending/></Route>
       <Route path="/"><h1><Main /></h1></Route>


    </Switch>

  </Router>
    </div>
  );
}

export default App;
