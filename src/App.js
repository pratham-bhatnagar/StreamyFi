import { useState } from "react";
import { Router, Route } from "wouter";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Outgoing from "./pages/Outgoing";
import Incoming from "./pages/Incoming";
import Streams from "./pages/Streams";
import Nav from "./components/Nav";
import AddService from './pages/AddService'

function App() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div className="App">
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Router>
        <Route path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/streams" component={Streams} />
        <Route path="/incoming" component={Incoming} />
        <Route path="/outgoing" component={Outgoing} />
        <Route path="/addservice" component={AddService} />
      </Router>
    </div>
  );
}

export default App;
