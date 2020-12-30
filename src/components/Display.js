import React from 'react';

const Display = ({setVolume, recording, volume}) => {
    
    return ( 
        <div id="display" className="col s6 row">
            <div className="subtitle col s12 center">Volume</div>
            <input 
            type="range" 
            step="0.01" 
            max="1" 
            min="0" 
            value={volume} 
            onChange={(e) => setVolume(e.target.value)}
            className="col s8 offset-s2" />
            <div className="col s12 center" id="volume-value">{Math.round(volume*100)}</div>
            <div className="subtitle col s12 center">Sound playing:</div>
            <div className="col s12 center" id="recording">{recording}</div>
        </div>
     );
}
 
export default Display;