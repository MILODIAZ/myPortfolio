import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import {Link} from 'react-scroll';

function Navbar() {

  const navRef = useRef();
  const openNavButtonRed = useRef();  

  const showNavbar = () => {
    navRef.current.classList.toggle('translate-x-full');
    openNavButtonRed.current.classList.toggle('hidden');
  }

  const listClassNames='p-3.5 hover:text-[#0dcfe5] xl:px-8 2xl:px-11'

  return(
    <header className="z-50 fixed w-screen">
      <div className='container mx-auto pt-4 px-12 2xl:px-24 flex flex-row justify-between items-center max-h-40'>

        <a href=' ' className='min-w-[110px] pt-2 w-1/6 xl:w-[168px]'>
          <img src={require('../images/Logo_Portfolio.png')} alt='Site-Logo' />
        </a>
        
        <nav ref={navRef} className='bg-center translate-x-full lg:translate-x-0 fixed lg:relative top-0 right-0 transition-transform lg:transition-none
         h-screen w-48 flex flex-col lg:justify-center'>
          <button className='p-5 lg:hidden' onClick={showNavbar}>
            <FaTimes className='text-[3rem] hover:fill-[#FF8E18] transition-all'/>
          </button>
          <div className='lg:flex lg:justify-end'>
          <ul className='lg:flex lg:justify-evenly'>
            <li className={listClassNames}><Link to='welcome_section' spy={true} smooth={true} offset={0} duration={800}>About</Link></li>
            <li className={listClassNames}><Link to='skills_section' spy={true} smooth={true} offset={0} duration={800}>Skills</Link></li>
            <li className={listClassNames}><Link to='projects_section' spy={true} smooth={true} offset={0} duration={800}>Projects</Link></li>
            <li className={listClassNames}><Link to='education_section' spy={true} smooth={true} offset={0} duration={800}>Education</Link></li>
            <li className={listClassNames}><Link to='contact_section' spy={true} smooth={true} offset={0} duration={800}>Contact</Link></li>				
          </ul>
          </div>
          
          <img src={require('../images/Milo.png')} alt='nav-character' className='w-24 m-auto lg:hidden'/>
        </nav>
        
        <button ref={openNavButtonRed} className='p-5 lg:hidden' onClick={showNavbar}>
          <FaBars className='text-[3rem] hover:fill-[#FF8E18] transition-all'/>
        </button>

      </div>
    </header>
    );
}

export default Navbar;