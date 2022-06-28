import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginIcon from "@mui/icons-material/Login";
import "./ajoutadmin.css";
import TopBar from "../components/TopBar/TopBar";
/*import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';*/

function AjoutAdmin() {
  return (
    <div className="admincontainer">
      <TopBar />
      <div className="loginforme">
        <form>
          <h1 style={{ marginLeft: "40px", marginTop: '20px', marginBottom: '7px' }}>AJOUTER UN ADMIN</h1>
          <div className="input-item">
            <PersonIcon style={{ backgroundColor: "rgb(204, 197, 197)" }} />
            <input type="text" placeholder="Nom" />
          </div>
          <div className="input-item">
            <PersonIcon style={{ backgroundColor: "rgb(204, 197, 197)" }} />
            <input type="text" placeholder="Prenom" />
          </div>
          <div className="input-item">
            <LoginIcon style={{ backgroundColor: "rgb(204, 197, 197)" }} />
            <input type="text" placeholder="Login" />
          </div>
          <div className="input-item">
            <LockOpenIcon style={{ backgroundColor: "rgb(204, 197, 197)" }} />
            <input type="password" placeholder="Password" />
          </div>

          <button
            style={{
              background: "#179CB1",
              marginLeft: "20px",
              marginRight: "20px",
              width: "90%",
              padding: "5px",
              color: "white",
              fontSize: "20px",
              marginBottom: "25px",
              height: "50px",
              borderRadius: "10px"
            }}
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default AjoutAdmin;
