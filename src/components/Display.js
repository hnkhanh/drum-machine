import React from 'react';

const Display = ({setVolume, recording, volume}) => {
    
    return ( 
        <div id="display">
            <h5 className="col s12">Volume</h5>
            <input 
            type="range" 
            step="0.01" 
            max="1" 
            min="0" 
            value={volume} 
            onChange={(e) => setVolume(e.target.value)}
            className="col s4 offset-s4" />
            <div className="col s4 offset-s4">{Math.round(volume*100)}</div>
            <h5>Sound playing:</h5>
            <div>{recording}</div>
        </div>
     );
}
 
export default Display;