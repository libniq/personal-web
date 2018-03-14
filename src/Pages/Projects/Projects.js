import React, {Component} from 'react';

import Nav from './../../Components/Nav/Nav';
import PageTitle from './../../Components/PageTitle/PageTitle';
import PageExplanation from './../../Components/PageExplanation/PageExplanation';
import Project from './Project/Project';

import ProjectsEn from './../../assets/Data/Projects/ProjectsEn';
import ProjectsEs from './../../assets/Data/Projects/ProjectsEs';

class Projects extends Component {
    
    constructor(props) {
        super(props);
        if(props.lang === "EN") {
            this.state = ProjectsEn;
        }else if( props.lang === "ES") {
            this.state = ProjectsEs;    
        }
    }

    componentWillReceiveProps(nextProps) {
        if ( nextProps.lang === "EN" ) {
            this.setState(ProjectsEn);
        }else{
            this.setState(ProjectsEs);
        }
    }

    render() {

        const projects = this.state.projects.map(
            (project) => {
                return <Project key={project.title} title={project.title} description={project.description} githubLink={project.githubLink} image={project.image} imageDescription={project.imageDescription}/>;
            }
        )

        return (
            <div style={{height: '100%'}}>
                <Nav lang={this.props.lang} changeLangToEs={this.props.changeLangToEs} changeLangToEn={this.props.changeLangToEn}  />
                <div className="container" style={{height: '100%'}}>
                    <PageTitle title={this.state.title}/>
                    <PageExplanation explanation={this.state.pageExplanation}/>
                    {projects}
                </div>
            </div>
        );
    }

}

export default Projects;