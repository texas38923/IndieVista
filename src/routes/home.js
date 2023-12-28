import Hero from '../components/Hero';
import Navbar from './../components/navbar';
import HomeImg from '../assets/12.jpg';
import Destination from '../components/Destination';

function Home() {
  return (
    <section>
      <Navbar />
      <Hero
        cName='hero'
        heroImg={HomeImg}
        title='Your Journey, Your Story!'
        text='Choose your favourite destination...'
        btnText='Travel Plan'
        url='/'
        btnClass='show'
      />
      <Destination />
    </section>
  );
}

export default Home;
