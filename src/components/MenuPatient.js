import React from 'react';
import './style/_menuPatient.scss';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import SearchIcon from '@material-ui/core/Search';
import SearchIcon from '@mui/icons-material/Search';
<SearchIcon />
const MenuPatient = () => {
    return (
        <div className="barNavPatient">
            <ul>
                <li><img src="./avatar.png" alt="avatar" /></li>
                <h2>D DIALLO IBRAHIM <p>Cardioloque</p></h2>
                <li>
                    <div className='__searIcon'>
                        <input type="text" placeholder='            Rechercher' />
                    </div>
                </li>
                <li ><NotificationsActiveIcon fontSize='large' /></li>
            </ul>
            <div className='__selectPatient'>
                <div className='__ville'>
                    <h4>Filtrer par ville</h4>
                    <select>
                        <option value="conakry">Conakry</option>
                        <option value="kindia" selected>Kindia</option>
                        <option value="farana">Farana</option>
                    </select>
                </div>
                <div className='__diabete'>
                    <h4>Filtrer par type de diabète</h4>
                    <select>
                        <option value="diabet1">Diabète insulino-déficient sévère</option>
                        <option value="diabet2" selected>Diabète insulino-résistant sévère</option>
                        <option value="diabet3">Diabète modéré lié à l'obésité</option>
                        <option value="diabet4"> Diabète modéré lié à l'âge</option>
                    </select>
                </div>
            </div>
        </div>

    );

};

export default MenuPatient;