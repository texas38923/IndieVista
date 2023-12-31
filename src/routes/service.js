import Hero from '../components/Hero';
import Navbar from './../components/navbar';
import ServiceImg from '../assets/1.jpg';
import Footer from '../components/footer';
import Trip from '../components/trip';

function Service() {
  return (
    <section>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={ServiceImg}
        title='Service'
        btnClass='hide'
      />
      <Trip />
      <Footer />
    </section>
  );
}

export default Service;
