import React from 'react';

const datedExperience = (props) => (
    <div className="row" style={datedExperienceStyle}>
        <div className="col-md-6">
            <h4>{props.date}</h4></div>
        <div className="col-md-6">
            <h4>{props.title}</h4>
            <h4>{props.institution}</h4>
            <h4>{props.city}</h4>
            <h4>{props.description}</h4>
        </div>
    </div>
);

const datedExperienceStyle = {
    marginTop: '25px'
}

export default datedExperience;