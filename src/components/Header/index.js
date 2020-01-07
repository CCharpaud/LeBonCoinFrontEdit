import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../Header/style.css";
import Logo from "../../images/Logo.png";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";

const Header = props => {
  const history = useHistory();
  // console.log("username ", props.user);
  return (
    <header className="box-shadow">
      <ul className="wrapper menu">
        <li>
          <ul>
            <li>
              <Link to="/" className="home-link">
                <h1>
                  <img src={Logo} alt="logo" />
                </h1>
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  history.push("/publish");
                }}
                type="button"
              >
                <span>
                  <ion-icon name="add-circle-outline"></ion-icon>
                </span>
                Déposer une annonce
              </button>
            </li>
            <li>
              <span className="search">
                <ion-icon name="search"></ion-icon>
              </span>
              Rechercher
            </li>
            {props.user.username ? <li>{props.user.username}</li> : null}
          </ul>
        </li>
        {props.user.token ? (
          <li
            className="cursor"
            onClick={() => {
              props.setUser({});
              Cookie.remove("token");
            }}
          >
            <span>
              <ion-icon name="person"></ion-icon>
            </span>
            Se deconnecter
          </li>
        ) : (
          <li
            className="cursor"
            onClick={() => {
              props.setShowModal(true);
            }}
          >
            <span>
              <ion-icon name="person"></ion-icon>
            </span>
            Se connecter
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
