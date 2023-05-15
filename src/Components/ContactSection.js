import contact_background from '../images/Contact_Section_Background.gif';

function ContactSection () {
    return (
      <div className='bg-cover bg-center z-0 section-div contact-section-shadow' style={{ backgroundImage: `url(${contact_background})` }}>
        <section id='contact_section' className='container mx-auto px-12 2xl:px-24 lg:px-19 min-h-[1080px]'>

        </section>
      </div>
    );
}

export default ContactSection;