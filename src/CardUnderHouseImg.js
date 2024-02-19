import React from "react";

export default function CardUnderHouseImg({ locationCardUnderHouseImg, title, number, title2, number2, unit, unit2 }) {
    const classNameCardUnderHouse = `card-under-house-img location-card-under-house-${locationCardUnderHouseImg}`
    
    return (
            <div className={classNameCardUnderHouse}>
                <div className="text-box">
                    <p className="card-title">{title}</p>
                    <p className="different-color">{number} <span>{unit}</span></p>
                </div>
                <div className="text-box">
                    <p className="card-title">{title2}</p>
                <p>{number2}<span> {unit2}</span></p>
                </div>
            </div>
    )
}