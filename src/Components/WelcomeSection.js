import welcome_background from '../images/Welcome_Section_Background.jpg';

function WelcomeSection () {
  return(

    <div className='bg-cover bg-center z-0 welcome-section-shadow' style={{ backgroundImage: `url(${welcome_background})` }}>

      <section id='welcome_section' className='container mx-auto px-12 2xl:px-24 lg:px-19 min-h-[1080px] flex flex-col justify-around items-center'>

        <div>
          <img src={require('../images/neon_monitor.png')} alt='Site-Logo' className='w-96 mt-32 md:mt-18 lg:mt-36 xl:mt-32 2xl:mt-28'/>
        </div>

        <div>
          <h1 className='text-4xl text-center py-2 text-[#0dcfe5]'>Emilio Díaz</h1>
          <h2 className='text-xl text-center py-2 text-[#d5a7f2]'>Civil Engineer in Computer Science and Computing</h2>
          <p className='text-sm text-justify py-3 lg:py-7 lg:w-7/12 xl:w-6/12'>Hello and welcome to this incredibly cool and tech-savvy portfolio of
            a Civil Engineer in Computer Science! Here you will find a lot of information 
            about my work and achievements, but don't worry, you won't get bored!
            Just because I'm an engineer, it doesn't mean I don't know how to have fun!
            In fact, you will find a lot of exciting and fun projects I've worked on,
            as well as get to know more about my skills in the tech industry. So, sit back,
            relax and get ready for an exciting and surprising journey through my portfolio!</p>
        </div>
        
      </section>
      
    </div>

  );
}

export default WelcomeSection;