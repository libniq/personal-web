import React from 'react';

import './Nav.css';
import { Link } from 'react-router-dom';
import AmericanFlag from './../../assets/img/americanflag.png';
import SpanishFlag from './../../assets/img/spanishflag.png';

const nav = (props) => {

    let langButton = null;

    if( props.lang === "ES" ){
        langButton = <li><img alt="Change language to English" onClick={props.changeLangToEn} src={AmericanFlag} style={{ marginTop: '15px', marginBottom: '15px',  height:'25px' , width: '30px'}} /></li>;
    }else {
        langButton = <li><img alt="Cambiar el lenguaje a español" onClick={props.changeLangToEs} src={SpanishFlag}  style={{ marginTop: '15px', marginBottom: '15px', height:'25px' , width: '30px', marginLeft: '10px'}} /></li>;
    }

    return (
        <div className="row">
            <div className="col-lg-12 col-md-12" style={navCol}>
                <ul className="nav nav-pills" style={navUl}>
                    <li><Link to="/">{props.lang === "ES" ? "Inicio" : "Home"}</Link></li>
                    <li><Link to="/curriculum">{props.lang === "ES" ? "Curriculum" : "Resumé"}</Link></li>
                    <li><Link to="/projects">{props.lang === "ES" ? "Proyectos" : "Projects"}</Link></li>
                    {langButton}
                </ul>
            </div>
            
        </div>
    );
}


// Styles 



const navCol = {
    color: 'white',
    backgroundColor: '#030303'
}

const navUl = {
    color: 'white',
    fontSize: '25px'
}

export default nav;