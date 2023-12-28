import Hero from '../components/Hero';
import Navbar from './../components/navbar';
import AboutImg from '../assets/night.jpg';

function About() {
  return (
    <section>
      <Navbar />
      <Hero cName='hero-mid' heroImg={AboutImg} title='About' btnClass='hide' />
    </section>
  );
}

export default About;
