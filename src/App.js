import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Contact from './routes/contact';
import Service from './routes/service';
import About from './routes/about';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
