import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // useHistory
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookie from "js-cookie";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import Modal from "./components/Modal";
import Publish from "./containers/Publish";
import "../src/App.css";

function App() {
  const token = Cookie.get("token");
  const username = Cookie.get("username");
  const [user, setUser] = useState({
    token: token,
    username: username
  });
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Modal
        user={user}
        setUser={setUser}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Header
        user={user}
        setUser={setUser}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/user/sign_up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish user={user} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
