import { ContactUs } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/header';
import { IntroductionSection } from './components/IntroductionSection';
import { OurValues } from './components/OurValues';
import { OurWorks } from './components/OurWorksSection';
import { WeAreHiringSection } from './components/WeAreHiringSection';
import { WeAreSolvSection } from './components/WeAreSolvSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';

function App() {
  return (
    <>
      <Header />
      <IntroductionSection />
      <WhoWeAreSection />
      <WeAreSolvSection />
      <OurValues />
      <OurWorks />
      <WeAreHiringSection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
