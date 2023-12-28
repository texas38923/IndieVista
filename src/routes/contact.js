import Hero from '../components/Hero';
import Navbar from './../components/navbar';
import ContactImg from '../assets/2.jpg';

function Contact() {
  return (
    <section>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={ContactImg}
        title='Contact'
        btnClass='hide'
      />
    </section>
  );
}

export default Contact;
