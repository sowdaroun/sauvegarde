import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from '@mui/icons-material/Menu';
import "./topbar.scss";

function TopBar() {
  return (
    <div className="topbar">
      <div className="avatar">
        <MenuIcon style={{ display: 'none' }} />
        <AccountCircleIcon style={{ height: "120px", width: "120px" }} />
        <div>
          <h3 style={{ fontWeight: 'bold', fontSize: "25px" }}>Dr DIALLO ISMAEL</h3>
          <h2 style={{ color: "gray", fontSize: "12px" }}>
            Cardiologie
          </h2>
        </div>
      </div>


      <div className="topcenter">
        <SearchIcon style={{ marginLeft: '10px', marginRight: '10px' }} />
        <input type="text" placeholder="Recherche" />
      </div>
      <div className="toprigth">
        <NotificationsActiveIcon fontSize='large' />
      </div>

    </div>
  );
}

export default TopBar;
