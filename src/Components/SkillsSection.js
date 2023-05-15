import skills_background from '../images/Skills_Section_Background.jpg';
import SkillsContainer from './SkillsContainer';

const imgClassNames='min-w-[60px] h-[60px] lg:w-[70px] lg:h-[70px]';

function SkillsSection () {
    return (
      <div className='bg-cover bg-center z-0 section-div skills-section-shadow' style={{ backgroundImage: `url(${skills_background})` }}>
        <section id='skills_section' className='container mx-auto px-12 2xl:px-24 lg:px-19 h-[937px]'>
          <div className='flex flex-col lg:flex-row lg:justify-around pt-[150px] lg:pt-[250px]'>
            <SkillsContainer nombre='Frontend'>
                <img alt='HTML' src={require('../images/html.png')} className={imgClassNames}/>
                <img alt='CSS' src={require('../images/css-3.png')} className={imgClassNames}/>
                <img alt='Javascript' src={require('../images/js.png')} className={imgClassNames}/>
                <img alt='TailwindCSS' src={require('../images/tailwind-icon.png')} className={imgClassNames}/>
                <img alt='Bootstrap' src={require('../images/bootstrap-icon.png')} className={imgClassNames}/>
                <img alt='React' src={require('../images/react-icon.png')} className={imgClassNames}/>
                <img alt='JQuery' src={require('../images/jquery.png')} className={imgClassNames}/>
              </SkillsContainer>
              <SkillsContainer nombre='Backend'>
                <img alt='NodeJS' src={require('../images/node-icon.png')} className={imgClassNames}/>
                <img alt='Python' src={require('../images/python-icon.png')} className={imgClassNames}/>
                <img alt='Java' src={require('../images/java-icon.png')} className={imgClassNames}/>
                <img alt='PHP' src={require('../images/php.png')} className={imgClassNames}/>
                <img alt='PostgreSQL' src={require('../images/postgresql.png')} className={imgClassNames}/>              
              </SkillsContainer>
              <SkillsContainer nombre='Otros'>
                <img alt='Visual Studio Code' src={require('../images/vscode.png')} className={imgClassNames}/>
                <img alt='Git' src={require('../images/git.png')} className={imgClassNames}/>
              </SkillsContainer>
          </div>
        </section>
      </div>
    );
}

export default SkillsSection;