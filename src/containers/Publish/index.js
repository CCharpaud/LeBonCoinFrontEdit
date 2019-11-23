import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Publish/style.css";
import axios from "axios";
import Cookie from "js-cookie";

export default function Publish(props) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const token = props.user.token;
  const history = useHistory();

  return (
    <div className="wrapper">
      <div className="containOfCreate">
        <h2> Déposer une annonce </h2>

        <form
          onSubmit={async event => {
            event.preventDefault();

            const data = new FormData();
            data.append("title", title);
            data.append("files", file);
            data.append("description", description);
            data.append("price", price);

            const response = await axios.post(
              "https://leboncoin-api.herokuapp.com/api/offer/publish",
              data,
              {
                headers: {
                  Authorization: "Bearer " + token
                }
              }
            );
            history.push(/offer/ + response.data._id);

            console.log(response.data);
            console.log(response.data._id);
          }}
        >
          <span>Titre de l'annonce * </span>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={event => {
              setTitle(event.target.value);
            }}
          />
          <br />
          <span>Texte de l'annonce * </span>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={event => {
              setDescription(event.target.value);
            }}
          />
          <br />
          <span>Prix * </span>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={event => {
              setPrice(event.target.value);
            }}
          />

          <br />
          <span>Photo * </span>
          <input
            type="file"
            placeholder="Files"
            onChange={event => {
              setFile(event.target.files[0]);
            }}
          />

          <br />
          <input type="submit" value="Valider" />
        </form>
      </div>
    </div>
  );
}
