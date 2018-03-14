import React, { Component } from 'react';
//import './App.css';
import Index from './Pages/Index/Index';
import Curriculum from './Pages/Curriculum/Curriculum';
import Projects from './Pages/Projects/Projects';

import {Switch, Route} from 'react-router-dom';

class App extends Component {

  state = {
    lang : "ES"
  }

  changeLangToEs = () => {
    this.setState({
      lang: "ES"
    });
  }

  changeLangToEn = () => {
    this.setState({
      lang: "EN"
    });
  }

  render() {
    return (
      <Switch>
        <Route path="/curriculum" render={()=><Curriculum lang={this.state.lang} changeLangToEs={this.changeLangToEs} changeLangToEn={this.changeLangToEn}/>}/>
        <Route path="/projects" render={()=><Projects lang={this.state.lang} changeLangToEs={this.changeLangToEs} changeLangToEn={this.changeLangToEn}/>}/>
        <Route path="/" render={()=><Index lang={this.state.lang} changeLangToEs={this.changeLangToEs} changeLangToEn={this.changeLangToEn}/>}/>
      </Switch>
    );  
  }
}

export default App;
