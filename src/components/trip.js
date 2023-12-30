import './tripStyles.css';
import TripData from './tripData';
import vara from '../assets/varanasi.jpg';
import bombay from '../assets/bombay.jpg';
import jaipur from '../assets/jaipur.jpg';
import kochi from '../assets/kochi.jpeg';
import rishikesh from '../assets/rishikesh.webp';
import mysuru from '../assets/mysuru.webp';
import agra from '../assets/agra.avif';
import darjeeling from '../assets/darjeeling.webp';
import goa from '../assets/goa-1.webp';

function Trip() {
  return (
    <div className='trip'>
      <h1>Famous Trips</h1>
      <p>
        Have a look on the famous travel plans in exploring the Indian
        subcontinent...
      </p>

      <div className='tripcard'>
        <TripData
          image={vara}
          heading='Varanasi, Uttar Pradesh'
          text='A spiritual hub on the banks of the Ganges, Varanasi enthralls with ancient temples, winding ghats, and the mystical aura of Hindu rituals along the sacred river.'
        />
        <TripData
          image={bombay}
          heading='Mumbai, Maharashtra'
          text='The bustling city of dreams, Mumbai captivates with its iconic skyline, Bollywood glamour, vibrant street markets, and the tranquil escape of Marine Drive.'
        />
        <TripData
          image={jaipur}
          heading='Jaipur, Rajasthan'
          text='The Pink City of Jaipur beckons with its regal palaces, colorful bazaars, and the architectural marvel of Hawa Mahal, offering a glimpse into royal Rajasthan.'
        />
      </div>
      <div className='tripcard'>
        <TripData
          image={kochi}
          heading='Kochi, Kerala'
          text='Kochi, a coastal gem in Kerala, enchants with Chinese fishing nets, historic spice markets, and the harmonious blend of colonial and Indian influences.'
        />
        <TripData
          image={rishikesh}
          heading='Rishikesh, Uttarakhand'
          text='Nestled in the Himalayan foothills, Rishikesh is a yogic haven by the Ganges. Adventure awaits with river rafting, while serenity reigns in ashrams and temples.'
        />
        <TripData
          image={mysuru}
          heading='Mysuru, Karnataka'
          text='Mysuru, a cultural gem, showcases opulent palaces, vibrant silk markets, and the enchanting Amba Vilas Palace, a testament to royal splendor in South India.'
        />
      </div>
      <div className='tripcard'>
        <TripData
          image={agra}
          heading='Agra, Uttar Pradesh'
          text="Home to the iconic Taj Mahal, Agra exudes Mughal grandeur. Explore the Agra Fort and Fatehpur Sikri for a journey through India's rich history."
        />
        <TripData
          image={darjeeling}
          heading='Darjeeling, West Bengal'
          text='Nestled in the Himalayas, Darjeeling captivates with its tea plantations, the UNESCO-listed Toy Train, and panoramic views from Tiger Hill at sunrise.'
        />
        <TripData
          image={goa}
          heading='Goa'
          text="A coastal paradise, Goa lures with golden beaches, vibrant nightlife, Portuguese architecture, and a rich blend of culture and relaxation on India's western shores."
        />
      </div>
    </div>
  );
}

export default Trip;
