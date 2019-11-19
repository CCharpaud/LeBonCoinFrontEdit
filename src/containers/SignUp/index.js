import React, { useState } from "react";
import "../SignUp/style.css";
import axios from "axios";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasseword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const history = useHistory();

  return (
    <div>
      <div className="wrapper">
        <div className="containOfSign">
          <div className="left">
            <h2> Pourquoi créer un compte ? </h2>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4083D7"
                strokeWidth="2.5"
                strokeLinecap="square"
                strokeLinejoin="arcs"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Gagner du temps
              <p>
                Publiez vos annonces rapidement, avec vos informations
                pré-remplies chaque fois que vous souhaitez déposer une nouvelle
                annonce.
              </p>
            </span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4083D7"
                strokeWidth="2.5"
                strokeLinecap="square"
                strokeLinejoin="arcs"
              >
                <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
              </svg>
              Soyer les premiers informés
              <p>
                Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce
                qui vous intéresse.
              </p>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4083D7"
                strokeWidth="2.5"
                strokeLinecap="square"
                strokeLinejoin="arcs"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Visibilité
              <p>
                Suivez les statistiques de vos annonces (nombre de fois où votre
                annonce a été vue, nombre de contacts reçus).
              </p>
            </span>
          </div>
          <div className="Right">
            <h2> Créez un compte </h2>
            <form
              onSubmit={async event => {
                event.preventDefault();
                if (secondPassword === password && checkbox === true) {
                  try {
                    const response = await axios.post(
                      "https://leboncoin-api.herokuapp.com/api/user/sign_up",
                      {
                        email: email,
                        username: user,
                        password: password
                      }
                    );

                    Cookie.set(response.data.token);
                  } catch (error) {
                    alert("Vous disposez déja d'un compte");
                  }
                } else {
                  alert("Probleme mdp");
                }
              }}
            >
              <label>
                Pseudo
                <input
                  type=""
                  value={user}
                  onChange={event => {
                    setUser(event.target.value);
                  }}
                />
              </label>
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
                Mot de passe *
                <input
                  type="password"
                  value={password}
                  onChange={event => {
                    setPasseword(event.target.value);
                  }}
                />
              </label>
              <label>
                Confirmer le mot de passe *
                <input
                  type="password"
                  value={secondPassword}
                  onChange={event => {
                    setSecondPassword(event.target.value);
                  }}
                />
              </label>
              <div className="confirm">
                <input
                  type="checkbox"
                  value={checkbox}
                  onClick={() => {
                    setCheckbox(!checkbox);
                  }}
                />

                <p>
                  J’accepte les Conditions Générales de Vente et les Conditions
                  Générales d’Utilisation » *
                </p>
              </div>

              <input
                className="sub"
                type="submit"
                value="Créer mon Compte Personnel"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
