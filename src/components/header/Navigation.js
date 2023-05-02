import React from 'react'
import { dataNav } from '../datas/DataNav'
import { Link, useLocation } from 'react-router-dom'
import '../css/header.css';

export default function Navigation() {
    let route = useLocation().pathname;
    return (
    <header>   
        <nav >
            <div id='nav1' >
                <a href="/"><img src="img/logo.png" alt="logo" id='logo' /></a>
                <div id='menu_content'>
                    <ul>
                        {dataNav.map((item) => (
                            <Link to={item.img} key={item.id}>
                                <li><img src={item.img} alt="" /> {item.text}</li>
                            </Link>))}
                    </ul>
                </div>
            </div>
            <div id='nav2'>
                <div id='search'>
                    <img src="img/svgexport-8.svg"/>
                    <input type="search" placeholder= 'Search' />
                </div>
                <div id='nav2_text'>
                    <a href="/story">Library</a> 
                    <p>Forum</p>
                    <img src="img/svgexport-9.svg"/>    
                </div>
                
                <button>Sign In</button>
                
            </div>
        </nav>
    </header>
    )
}
