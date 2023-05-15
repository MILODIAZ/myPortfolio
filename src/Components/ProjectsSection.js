import projects_background from '../images/Projects_Section_Background.gif';

function ProjectsSection () {
    return (
      <div className='bg-cover bg-center z-0 section-div projects-section-shadow' style={{ backgroundImage: `url(${projects_background})` }}>
        <section id='projects_section' className='container mx-auto px-12 2xl:px-24 lg:px-19 min-h-[1080px]'>
        
        </section>
      </div>
    );
}

export default ProjectsSection;