import React, { useState } from "react";

export default function Button({ location, title1, title2, icon }) {
    const classNameButton = `button locationButton-${location}`;
    const [buttonClicked, setButtonClicked] = useState('')

    const handleClick = (side) => {
        setButtonClicked(side === 'left' ? 'clicked-left' : 'clicked-right');
    };

    return (
        <div className={`${classNameButton} ${buttonClicked}`} onClick={(e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            handleClick(x < rect.width / 2 ? 'left' : 'right');
        }}
        >
            
            <div className="text">
                {/* <img src={icon} alt="icon"/> */}
                <p>
                    {title1}
                </p>
                <div className="line"></div>
                <p>{title2}</p>    
            </div>
            
        </div>
    )
}