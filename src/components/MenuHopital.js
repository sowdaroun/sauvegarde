import React from 'react';
import './style/_menuHopital.scss';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import SearchIcon from '@mui/icons-material/Search';
// <SearchIcon />
const MenuHopital = () => {
    return (
        <div className="barNavHopital">
            <ul>
                <li><img src="./avatar.png" alt="avatar" /></li>
                <h2>D DIALLO IBRAHIM<p>Cardioloque</p></h2>
                <li>
                    <input type="text" placeholder='            Rechercher' />
                </li>
                <li><NotificationsActiveIcon fontSize='large' /></li>
            </ul>
            <div className='__selectHopital'>
                <h4>Filtrer par ville</h4>
                <select>
                    <option value="conakry">Conakry</option>
                    <option value="kindia" selected>Kindia</option>
                    <option value="farana">Farana</option>
                </select>
            </div>
        </div>
    );
};

export default MenuHopital;