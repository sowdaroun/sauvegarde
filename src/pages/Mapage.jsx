import React from 'react';
import MapComp from '../components/MapComp';
import MapSelect from '../components/MapSelect';


const Mapage = () => {
    return (
        <div className='_maMapage'>
            <MapSelect />
            <MapComp />
        </div>
    );
};

export default Mapage;