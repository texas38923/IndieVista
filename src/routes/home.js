import Hero from '../components/Hero';
import Navbar from './../components/navbar';
import HomeImg from '../assets/homepage.jpg';
import Destination from '../components/Destination';
import Footer from '../components/footer';

function Home() {
  return (
    <section>
      <Navbar />
      <Hero
        cName='hero'
        heroImg={HomeImg}
        title='<< IndieVista >>'
        text='A gateway to the enchanting tapestry of Indian tourism...'
        btnText='Travel Plans'
        url='/service'
        btnClass='show'
      />
      <Destination />
      <Footer />
    </section>
  );
}

export default Home;
