import React from 'react';

const pageTitle = (props) => (
    <div className="row" style={pageTitleStyle}>
        <div className="col-md-12">
            <h2 style={pageTitleH2Style}> {props.title} </h2>
            <hr style={pageTitleHrStyle}/>
        </div>
    </div>
);


const pageTitleStyle =  {
    marginTop : '25px',
    color: 'black',
}

const pageTitleH2Style = {
    fontSize : '40px'
}

const pageTitleHrStyle = {
    height: '5px',
    borderColor: 'black',
    backgroundColor: 'black'
}

export default pageTitle;