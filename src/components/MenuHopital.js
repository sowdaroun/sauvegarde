// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// Top bar de sow ousmane
// <ul>
//     <li><img src="./avatar.png" alt="avatar" /></li>
//     <h2>D DIALLO IBRAHIM<p>Cardioloque</p></h2>
//     <li>
//         <input type="text" placeholder='            Rechercher' />
//     </li>
//     <li><NotificationsActiveIcon fontSize='large' /></li>
// </ul>

// import SearchIcon from '@mui/icons-material/Search';
// <SearchIcon />
import React from 'react';
import './style/_menuHopital.scss';
import TopBar from './TopBar/TopBar';


const MenuHopital = () => {
    return (
        <div className="barNavHopital">
            <TopBar />

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