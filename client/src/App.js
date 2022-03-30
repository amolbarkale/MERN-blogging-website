import "./App.css";
import Topbar from "./Coponents/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Reg";
import { Context } from "./Contexts/context";
import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/reg">{user ? <Home /> : <Register />} </Route>
        <Route path="/login">{user ? <Home /> : <Login />} </Route>
        <Route path="/write">{user ? <Write /> : <Register />} </Route>
        <Route path="/settings">{user ? <Settings /> : <Register />} </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </>
  );
}

export default App;
