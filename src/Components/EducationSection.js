import education_background from '../images/Education_Section_Background.jpg';

function EducationSection () {
    return (
      <div className='bg-cover bg-center z-0 section-div education-section-shadow' style={{ backgroundImage: `url(${education_background})` }}>
        <section id='education_section' className='container mx-auto px-12 2xl:px-24 lg:px-19 min-h-[1080px]'>

        </section>
      </div>
    );
}

export default EducationSection;