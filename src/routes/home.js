import Hero from '../components/Hero';
import Navbar from './../components/navbar';
import HomeImg from '../assets/12.jpg';
import Destination from '../components/Destination';
import Trip from '../components/trip';
import Footer from '../components/footer';

function Home() {
  return (
    <section>
      <Navbar />
      <Hero
        cName='hero'
        heroImg={HomeImg}
        title='Your Journey, Your Story!'
        text='Choose your favourite destination...'
        btnText='Travel Plans'
        url='/service'
        btnClass='show'
      />
      <Destination />
      <Trip />
      <Footer />
    </section>
  );
}

export default Home;
