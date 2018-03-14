import React from 'react';
import SectionTitle from './SectionTitle/SectionTitle';
import CurriculumSubSection from '../CurriculumSubSection/CurriculumSubSection';


const curriculumSection = (props) => {

    const subsections = props.sectionInfo.subsections.map(
        (subsection) => {
            return <CurriculumSubSection key={subsection.title} subSectionInfo={subsection} />
        }
    );

    return (
        <div>
            <SectionTitle title={props.sectionInfo.title}/>
            {subsections}
        </div>
    );
};


export default curriculumSection;