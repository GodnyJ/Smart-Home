import React from "react";

export default function Menu() {
    return (
    <nav>
      <ul className="menu">
        <li><a href="#consumption">Consumption</a></li>
        <li><a href="#devices">Devices</a></li>
        <li><a href="#optimization">Optimization</a></li>
        <li><a href="#reporting">Reporting</a></li>
        <li><img className='fire-icon' src="/img/fire-icon.png" alt="icon with fire"></img></li>
        <li><a className='text-color-dark' href="#lighting">Lighting</a></li>
        <li><a className='text-color-dark' href="#energystorage">Energy storage</a></li>
      </ul>
    </nav>
    )
}