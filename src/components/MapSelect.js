import React from 'react';
import './style/_mapselect.scss';


const MapSelect = () => {
    return (
        <div className='_menuSeletMap'>
            <select>
                <option value="date">2018</option>
                <option value="date">2019</option>
                <option value="date">2020</option>
                <option value="date"> 2021</option>
                <option value="date" selected> 2022</option>
            </select>
            <select>
                <option value="conakry" selected>Conakry</option>
                <option value="kindia">Kindia</option>
                <option value="farana">Farana</option>
            </select>
        </div>
    );
};

export default MapSelect;