import Hero from '../components/Hero';
import SignUpImg from '../assets/sup.jpg';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SignUpForm from '../components/SignUpForm';

function SignUp() {
  return (
    <section>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={SignUpImg}
        title='Sign-Up!'
        btnClass='hide'
      />
      <SignUpForm />
      <Footer />
    </section>
  );
}

export default SignUp;
