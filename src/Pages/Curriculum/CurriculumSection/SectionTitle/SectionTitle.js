import React from 'react';

const sectionTitle = (props) => {

    const sectionTitleStyle =  {
        color: 'black',
        marginRight: '5%',
        marginTop: '50px',
        marginLeft: '5%',
        textAlign: 'center'
    }

    return (
        <div className="row" style={sectionTitleStyle}>
            <div className="col-md-12">
                <h2 style={sectionTitleH2Style}>{props.title}</h2>
                <hr style={sectionTitleHrStyle}/>
            </div>
        </div>
    );
};




const sectionTitleH2Style = {
    fontSize : '40px'
}

const sectionTitleHrStyle = {
    height: '5px',
    borderColor: 'black',
    backgroundColor: 'black'
}

export default sectionTitle;