import React from 'react'
import { Link } from 'react-router-dom'
import "./NavigationDesktop.css";
import RoutingPath from '../../../routes/RoutingPath';

export const NavigationDesktop = () => {
    return (
        <div>
            <nav className="navbar">
                <Link className="home" to={RoutingPath.homeView}>Home</Link>
                <Link className="poke" to={RoutingPath.pokeView}>Poke</Link>
            </nav>
           
        </div>
    )
}
