import React , {useState} from 'react';
import Display from './components/Display';
import Drumpad from './components/Drumpad';

const data = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3'
  },
  {
    keyCode: 83, 
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3'
  }
];
const App = () => {  
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState('');
  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <h5>Click or press the keyboard to create your music!</h5>
      <div id="drum-machine" className="row">
        <div className="pad col s4 offset-s2" >
        {data.map(sound => (
          <Drumpad sound={sound} volume={volume} setRecording={setRecording}/>
        ))}
        </div>
        <Display  setVolume={setVolume} recording={recording} volume={volume}/>
      </div>
    </div>
  );
}

export default App;
