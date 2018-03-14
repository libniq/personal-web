import React, { Component } from 'react';
import './Index.css';

import JumbotronName from './../../Components/JumbotronName/JumbotronName';
import Nav from './../../Components/Nav/Nav';
import Footer from './../../Components/Footer/Footer';

class Index extends Component {
    render() {
        return (
            <div className="Index" style={{height: '100%'}}>
                <Nav lang={this.props.lang} changeLangToEs={this.props.changeLangToEs} changeLangToEn={this.props.changeLangToEn}   ></Nav>
                <div className="container" style={{height: '100%'}}>
                    <JumbotronName lang={this.props.lang}></JumbotronName>
                </div>
                <Footer lang={this.props.lang} fixed/>
            </div>
        );
    }
}

export default Index;