import {robots} from './robots';
import React from 'react';
import Art from './Art';

function ArtList () {
    const ArtListComp = robots.map((user,i) => {
        return <Art name = {robots[i].name} hash={robots[i].hash} price={robots[i].price}/>
    });
    
    return (
        <div>
            {ArtListComp}
        </div>
    );
}
export default ArtList;