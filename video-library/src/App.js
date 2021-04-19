import './App.css';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Main from "./components/Main/Main";



function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
    
     <Route path="/watchlist"><h1>My watchlist</h1></Route>
     <Route path="/">
        <h1> <Main/></h1>
        
     </Route>
     </Switch>
     </div>
     </Router>

  );
}

export default App;
