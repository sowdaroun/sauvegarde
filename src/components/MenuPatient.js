// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import SearchIcon from '@material-ui/core/Search';


// Top bar creer par sow
// <ul className='memu_med'>
//         <li className='menu_item'>
//           <AccountCircleIcon style={{ height: '60px', width: '60px' }} />
//           <div className='user_list'>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <TaskAltIcon style={{ fontSize: 'small', margin: '5px', color: 'gray' }} />
//               <span style={{ fontWeight: 'bold' }}>Ousmane Camara</span>
//             </div>

//             <span style={{ fontSize: '13px', marginLeft: '10px' }}>Diabetique de type A</span>
//             <span style={{ fontSize: '10px', color: 'gray', marginLeft: '10px' }}>En Traitement</span>
//           </div>
//         </li>
//       </ul>
import React from 'react';
import './style/_menuPatient.scss';
import SearchIcon from '@mui/icons-material/Search';
import TopBar from './TopBar/TopBar';
<SearchIcon />
const MenuPatient = () => {
    return (
        <div className="barNavPatient">
            <TopBar />

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