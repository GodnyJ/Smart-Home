import React from 'react';
import { CircularInput, CircularTrack, CircularProgress, CircularThumb } from 'react-circular-input';

export default function Dial({circularProgressColor, description, icon, value, onChange}) {
  const strokeWidth = 30; // Grubość linii okręgu
  
    
  return (
    <div className='dial-box'>

      <CircularInput  className='dial' value={value} onChange={onChange} radius={50} >
        <CircularTrack strokeWidth={strokeWidth} />
        <CircularProgress stroke={circularProgressColor} strokeWidth={strokeWidth} />
        <CircularThumb
          className='dial-shadow'
          r={8}
          style={{ fill: '#ffeed9' }}
        />
        <text 
          x="50%" 
          y="50%" 
          textAnchor="middle" 
          dy=".3em" 
          style={{ fontSize: 20 }} 
        >
          {Math.round(value * 100)}%
        </text>
      </CircularInput>

      <div className='dial-description'>
          <img alt='light-color-icon' src={icon}></img><p>{description}</p>
      </div>        

    </div>
  );
};