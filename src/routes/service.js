import Hero from '../components/Hero';
import Navbar from './../components/navbar';
import ServiceImg from '../assets/1.jpg';

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
    </section>
  );
}

export default Service;
