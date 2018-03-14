import React from 'react';

const titleStyle = {
    marginBottom:'30px',
    marginTop: '30px',
}

const whiteHr = {
    height:'2px',
    fontSize:'14px',
    backgroundColor:'white',
    borderColor:'white'
}

const hrTitleStyle = {
    ...whiteHr,
    marginBottom:'20px'
}

const hrBottom = {
    ...whiteHr,
    marginTop: '30px'
}


const project = (props) => (
    <div className="row" style={{backgroundColor: 'black', color: 'white', marginTop: '50px', marginBottom: '50px'}}>
        <div className="col-lg-12 col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <h2 style={titleStyle}>{props.title}</h2>
                    <hr style={hrTitleStyle}/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-lg-offset-1 col-md-12 col-xs-12" style={{marginBottom:'20px'}}>
                    <img alt={props.imageDescription} src={props.image} style={{width:'257px',height:'200px'}}/>
                </div>
                <div className="col-lg-5 col-md-12" style={{marginTop:'26px'}}>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <hr style={hrBottom}/>
                    <a style={{display: 'block', fontSize: '20px',  paddingBottom:'20px'}} href={props.githubLink} target="_blank" > Github </a>
                </div>
            </div>
        </div>
    </div>
);

export default project;
