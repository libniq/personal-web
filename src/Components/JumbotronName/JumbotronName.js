import React from 'react';

import './JumbotronName.css';



const jumbotronName = (props) => (
    <div className="Jumbotron row">
        <div className="col-md-12" style={JumbotronCol}>
            <h1 style={JumbotronH1}>Marcos Alcántara</h1>
            <h2 style={JumbotronH2}>  { props.lang === "ES" ? "Programador junior" : "Junior programmer" }</h2>
        </div>
    </div>
);


// Styles

const JumbotronCol = {
    marginTop : '5%',
    color: 'white',
    backgroundColor: 'rgba(3,2,4,0.9)'
}

const JumbotronH1 = {
    paddingTop: '25px'
}

const JumbotronH2 = {
    fontSize: '21px',
    paddingBottom: '25px'
}



export default jumbotronName;