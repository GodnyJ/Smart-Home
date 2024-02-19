import React from "react";

export default function RightBottomSideCard({ title}) {
    return (
        <div className='right-bottom-side-card'>
            <h2>{title}</h2>
            <div className="notifications-box">
                <p><img alt='icon' src='img/attention-icon.svg'></img>The kitchen window is open</p>
                <p><img alt="icon" src='img/ok-icon.svg'></img>All doors are closed</p>
                <p><img alt="icon" src='img/ok-icon.svg'></img>CCTV active</p>
                <p><img alt="icon" src='img/ok-icon.svg'></img>All residents are inside</p>
            </div>
        </div>
    )
}