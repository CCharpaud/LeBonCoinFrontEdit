import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "../../App.css";
import "../Offer/style.css";
import NoEyes from "../../images/pas-de-visuel.png";

const Offer = () => {
  let { id } = useParams();
  // console.log(id); ok

  const [isLoading, setIsLoading] = useState(true);
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await Axios.get(
          "https://leboncoin-api.herokuapp.com/api/offer/" + id
        );
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  const dateCreated = new Date(offer.created);
  const date =
    dateCreated.toLocaleDateString() + " à " + dateCreated.toLocaleTimeString();
  if (isLoading === true) {
    return <p>Loading...</p>;
  } else {
    return (
      <section className="offer">
        <div className="wrapper-offer">
          <article>
            <div className="container-img box-shadow">
              {offer.pictures.length > 0 ? (
                <img src={offer.pictures[0]} alt={offer.title}></img>
              ) : (
                <img src={NoEyes} alt={offer.title}></img>
              )}
              <div className="infos-annonce p-15">
                <div>
                  <h3>{offer.title}</h3>
                  <span>{offer.price + "€"}</span>
                </div>
                <span className="date">{date}</span>
              </div>
            </div>
            <div className="offer-description mb-20">
              <h4>Description</h4>
              <p>{offer.description}</p>
            </div>
          </article>
          <aside>
            <div className="h-255 w-100 box-shadow">
              <div className="offer-infos-creator p-15">
                <div className="name">{offer.creator.account.username}</div>
                <div>17 annonces en ligne</div>
              </div>
              <div className="aside-button">
                <button type="button">
                  <span className="cart">
                    <ion-icon name="cart"></ion-icon>
                  </span>
                  <span>acheter</span>
                </button>
                <button type="button">2nd button</button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    );
  }
};

export default Offer;
