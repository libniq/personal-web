import React from 'react';

import Image from "./../../assets/img/fotocurried.jpeg";

const profileImage = () => (
    <div className="row" style={{marginBottom:'450px'}}>
        <div className="col-md-12">
            <img alt="My Profile" className="img-circle img-responsive" src={Image} style={imageStyle}/>
        </div>
    </div>
);

const imageStyle = {
    width: '200px',
    height: '270px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-100px',
    marginTop: '100px',
}

export default profileImage;