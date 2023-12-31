import Hero from '../components/Hero';
import Navbar from './../components/navbar';
import ContactImg from '../assets/2.jpg';
import Footer from '../components/footer';
import ContactForm from '../components/ContactForm';

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
      <ContactForm />
      <Footer />
    </section>
  );
}

export default Contact;
