import React, {Component} from 'react';

import './Curriculum.css';
import Nav from './../../Components/Nav/Nav';
import ProfileImage from '../../Components/ProfileImage/ProfileImage';
import Footer from './../../Components/Footer/Footer';
import CurriculumSection from './CurriculumSection/CurriculumSection';

import CurriculumEn from './../../assets/Data/Curriculum/CurriculumEn';
import CurriculumEs from './../../assets/Data/Curriculum/CurriculumEs';

class Curriculum extends Component {

    constructor(props) {
        super(props);
        if(props.lang === "EN") {
            this.state = CurriculumEn;
        }else if( props.lang === "ES") {
            this.state = CurriculumEs;    
        }
      }


    componentWillReceiveProps(nextProps) {
        if ( nextProps.lang === "EN" ) {
            this.setState(CurriculumEn);
        }else{
            this.setState(CurriculumEs);
        }
    }


    render() {
        

        const sections = this.state.sections.map(
            (section ) => {
                return <CurriculumSection key={section.title} sectionInfo={section} />
            }
        );
        
        
        return (
            <div>
                <Nav lang={this.props.lang} changeLangToEs={this.props.changeLangToEs} changeLangToEn={this.props.changeLangToEn} />
                <div className="container">
                    <ProfileImage></ProfileImage>
                    {sections}
                </div>
                <Footer lang={this.props.lang} />
            </div>
        );
    }
}

export default Curriculum;

