import './App.css';
import Navbar from './Components/Navbar';
import WelcomeSection from './Components/WelcomeSection'
import SkillsSection from './Components/SkillsSection';
import ProjectsSection from './Components/ProjectsSection';
import EducationSection from './Components/EducationSection';
import ContactSection from './Components/ContactSection';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>        
        <WelcomeSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
