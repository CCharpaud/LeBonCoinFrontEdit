import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../../App.css";
import "../Home/style.css";
import NoEyes from "../../images/pas-de-visuel.png";

const Home = () => {
  // console.log("1");
  const [isLoading, setIsLoading] = useState(true);
  const [listOffers, setListOffers] = useState([]);

  useEffect(() => {
    //console.log("2");
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await Axios.get(
          "https://leboncoin-api.herokuapp.com/api/offer/with-count"
        );
        setListOffers(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="wrapper-home pv-50">
        <div className="search-box box-shadow br-5 pv-50">
          <form>
            <input
              placeholder=" 🔍  Que recherchez-vous ?"
              type="text"
              name="search"
            />
            <button className="br-5">Rechercher</button>
          </form>
        </div>
      </div>
      <div className="wrapper-home offers">
        {isLoading === true ? (
          <p>Loading...</p>
        ) : (
          <>
            {listOffers.map((element, index) => {
              const dateCreated = new Date(element.created);
              const date =
                dateCreated.toLocaleDateString() +
                " à " +
                dateCreated.toLocaleTimeString();
              return (
                <Link to={"/offer/" + element._id} key={index}>
                  <article className="box-shadow br-5 mb-20 overflow-hidden">
                    <div className="container-img">
                      {element.pictures.length > 0 ? (
                        <img src={element.pictures[0]} alt={element.title} />
                      ) : (
                        <img src={NoEyes} alt={element.title} />
                      )}
                    </div>
                    <div className="description p-15">
                      <div>
                        <h3>{element.title}</h3>
                        <span>{element.price + "€"}</span>
                      </div>
                      <span className="date">{date}</span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </>
        )}
      </div>
      <div className="wrapper-home pages">
        <span>＜</span>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <span>＞</span>
      </div>
    </section>
  );
};

export default Home;
