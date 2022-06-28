import React from "react";
import carte from "../Icones/carte.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import "./bande.css";

function Bande() {
  return (
    <div className="bande_container">
      <div className="bande_left">
        <div className="bande_logo">
          <h2 style={{ marginTop: "1rem" }}>LOGO</h2>
        </div>
        <div className="centre">
          <span
            style={{ fontSize: "40px", color: "white", fontWeight: "bold" }}
          >
            Ensemble nous changeons
            <br />
            La vie de nos malades
          </span>
          <br />
          <span style={{ color: "white" }}>
            Savoir (ou,et quand et comment) sur une <br />
            seule plateforme avec des données réelles
          </span>
          <br />
          <div className="bouton">
            <button
              style={{
                padding: "10px",
                fontSize: "25px",

                outline: "none",
                cursor: "pointer",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Voir les données
              <ArrowDownwardIcon style={{ marginLeft: "5px" }} />
            </button>
          </div>
        </div>
      </div>
      <div className="flash">
        <img src={carte} style={{ height: "190px" }} alt="" />
      </div>
    </div>
  );
}

export default Bande;
