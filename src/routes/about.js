import Hero from '../components/Hero';
import Navbar from './../components/navbar';
import AboutImg from '../assets/night.jpg';
import Footer from '../components/footer';
import AboutUs from '../components/AboutUs';

function About() {
  return (
    <section>
      <Navbar />
      <Hero cName='hero-mid' heroImg={AboutImg} title='About' btnClass='hide' />
      <AboutUs />
      <Footer />
    </section>
  );
}

export default About;
