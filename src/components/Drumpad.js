import React, {useState, useEffect} from 'react';

  
const Drumpad = ({sound, volume, setRecording}) =>{

    const [active, setActive] = useState(false)

    useEffect(() => {
        document.addEventListener('keydown', handleKeypress);
        return () => {
            document.removeEventListener('keydown', handleKeypress);
        }
    })
   

    const handleKeypress = (e) => {
        if(e.keyCode === sound.keyCode) {
            playSound();
        }
    }

    const playSound = () => {
        const audioTag = document.getElementById(sound.keyTrigger);
        setActive(true);
        setTimeout(() => setActive(false),300);
        audioTag.volume = volume; 
        audioTag.currentTime = 0;
        audioTag.play();
        setRecording(sound.id);
    }

    return (
        <div>
            <div className= {`drum-pad btn ${active && 'waves-effect waves-light yellow btn'}`} 
            id={sound.id} 
            onClick={playSound}>
            {sound.keyTrigger}
                <audio src={sound.url} id={sound.keyTrigger} className="clip"/> 
            </div>
        </div>
    )
}

export default Drumpad;