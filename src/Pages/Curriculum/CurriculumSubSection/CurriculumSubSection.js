import React from 'react';

import SubsectionTitle from './SubsectionTitle/SubsectionTitle';
import Experience from '../Experience/Experience';
import DatedExperience from './../DatedExperience/DatedExperience';

const curriculumSubSectionStyle = {
    marginTop: '20px',
    color: 'black'

}

const curriculumSubSectionCol = {
    backgroundColor: '#040404',
    color: 'white',
    paddingBottom: '30px'
}

const curriculumSubSectionHrStyle = {
    height: '2px',
    fontSize: '14px',
    backgroundColor: 'white',
    borderColor: 'white'
}

const curriculumSubSection = (props) => {

    const experiences = props.subSectionInfo.experiences.map(
        (experience) => {
            let exp = null;

            if( experience.date === undefined ){
                exp = <Experience description={experience.description} />;
                        
            }else {
                exp = <DatedExperience date={experience.date} title={experience.title} institution={experience.institution}  city={experience.city} description={experience.description}/>;
            }

            return (
                <div key={experience.id} >
                        {exp}
                        <hr style={curriculumSubSectionHrStyle} />
                </div>
            );
        }
    );


    return (
        <div className="row" style={curriculumSubSectionStyle}>
            <div className="col-md-12" style={curriculumSubSectionCol}>
                <SubsectionTitle title={props.subSectionInfo.title}/>
                <hr style={curriculumSubSectionHrStyle} />
                {experiences}
            </div>
        </div>
    );
};

export default curriculumSubSection;


