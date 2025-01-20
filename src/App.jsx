import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import TimelineSection from './components/TimelineSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import ProjectSection from './components/ProjectSection'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/*<Navbar />*/}
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;