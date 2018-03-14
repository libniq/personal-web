import React from 'react';

import './Footer.css';

const footer = (props) => {

    let footerStyle = {color: 'white', width: '100%'};

    if( props.fixed ) {
        footerStyle = {
            color: 'white',
            position: 'fixed',
            bottom: '0',
            width: '100%'
        }
    }

    return (
        <div className="Footer footer-dark" style={footerStyle}>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>{ props.lang === "ES" ? "Información de contacto:" : "Contact information:" }</h2>
                            <h4>+34 602414378 </h4>
                            <h4> marcosalcanttara@hotmail.com </h4>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default footer;