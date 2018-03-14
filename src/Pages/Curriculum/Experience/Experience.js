import React from 'react';

const experienceStyle = {
    backgroundColor : '#060606',
    color : 'rgb(249,249,249)',
    marginTop : '10px'
}

const experience = (props) => {
    
    
        return (
            <div className="row" style={experienceStyle}>
                    <div className="col-lg-4 col-md-12">
                        <h3> {props.tool} </h3></div>
                    <div className="col-lg-8 col-md-12" style={{padding:'14px'}}>
                        <p> {props.description} </p>
                    </div>
            </div>
        );
    

    
};

export default experience;