import React from 'react';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

interface LightbulbProps {
  isOn: boolean;
  toggleLight: () => void;
}

const Lightbulb: React.FC<LightbulbProps> = ({ isOn, toggleLight }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div
        onClick={toggleLight}
        data-cy="lightbulb-toggle"
        className={`mb-12 cursor-pointer w-32 h-32 flex items-center justify-center rounded-full ${
          isOn ? 'shine' : ''
        }`}
      >
        <EmojiObjectsIcon style={{width: "100%", height: "100%"}} 
          data-cy="lightbulb-icon"
          className={`transform rotate-180 ${isOn ? 'fill-yellow-400' : 'fill-gray-400'}`}
        />
      </div>

      <button onClick={toggleLight}>
        {isOn ? <ToggleOffIcon style={{width: '150px', height: '70px'}} className="" /> : <ToggleOnIcon style={{width: '150px', height: '70px'}} className="fill-purple-600" />}
      </button>
    </div>
  );
};

export default Lightbulb;
