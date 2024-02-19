import React from "react";

export default function WhiteElement({locationWhiteElement, title, children}) {
    const classNameWhiteElement = `white-element location-white-element-${locationWhiteElement}`
    return (
        <div className={classNameWhiteElement}>
            <h3>{title}</h3>
            {children}
        </div>
    )
}