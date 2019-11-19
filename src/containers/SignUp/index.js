import React from "react";
import "../SignUp/style.css";

export default function SignUp() {
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
            <form>
              <label>
                Pseudo
                <input type="text" />
              </label>
              <label>
                Adresse email
                <input type="email" />
              </label>
              <label>
                Mot de passe *
                <input type="password" />
              </label>
              <label>
                Confirmer le mot de passe *
                <input type="password" />
              </label>
              <div className="confirm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F56B2A"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                  strokeLinejoin="arcs"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                </svg>
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
