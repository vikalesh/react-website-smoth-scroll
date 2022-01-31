
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screen";
import { Signin } from "./screen/Signin";
function App() {
  return (
    <>

    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/signup" component={Signin} />
      </Switch>      
    </Router>

 
    </>
  );
}

export default App;
