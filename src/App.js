import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // useHistory
} from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./containers/Home";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import "../src/App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = Cookie.get("token");
  const [user, setUser] = useState({ token: token });
  // let history = useHistory();

  // useEffect(() => {
  //   console.log("user ", user);
  // }, []);

  return (
    <Router>
      {showModal === true && (
        <div className="modal">
          <div
            className="modalClose"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="square"
              strokeLinejoin="arcs"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>

          <div className="contain">
            <h1>Connexion</h1>

            <form
              onSubmit={async event => {
                event.preventDefault();

                try {
                  const response = await axios.post(
                    "https://leboncoin-api.herokuapp.com/api/user/log_in",
                    {
                      email: email,
                      password: password
                    }
                  );

                  if (response.data.token) {
                    Cookie.set("token", response.data.token);
                    setShowModal(false);

                    setUser({ token: response.data.token });
                  } else {
                    alert("An error occurred");
                  }
                } catch (error) {
                  alert(error.message);
                }
              }}
            >
              <label>
                Adresse email
                <input
                  type="email"
                  value={email}
                  onChange={event => {
                    setEmail(event.target.value);
                  }}
                />
              </label>
              <label>
                Mot de passe
                <input
                  type="password"
                  value={password}
                  onChange={event => {
                    setPassword(event.target.value);
                  }}
                />
              </label>
              <input className="sub" type="submit" value={"Se connecter"} />
            </form>
            <span className="question">Vous n'avez pas de compte ?</span>
            <button
              className="creat"
              // onClick={() => {
              //   history.push("/user/sign_up");
              // }}
            >
              Créer un compte
            </button>
          </div>
        </div>
      )}
      <Header
        showModal={showModal}
        setShowModal={setShowModal}
        user={user}
        setUser={setUser}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/user/sign_up">
          <SignUp />
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
