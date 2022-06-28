import React from 'react';
import Map2 from '../components/Map2';
import MapSelect from '../components/MapSelect';
import '../components/style/_mapselect.scss';

const Map2page = () => {
    return (
        <div className='_mapPage'>
            <MapSelect />
            <Map2 />
        </div>
    );
};

export default Map2page;