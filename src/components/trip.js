import './tripStyles.css';
import TripData from './tripData';
import Trip1 from '../assets/5.jpg';
import Trip2 from '../assets/8.jpg';
import Trip3 from '../assets/6.jpg';

function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum
        maiores rerum incidunt commodi iste, aperiam numquam omnis quas soluta
        sed blanditiis quis ea vel?
      </p>

      <div className='tripcard'>
        <TripData
          image={Trip1}
          heading='Trip in Indonesia'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque eos nihil ipsum sequi blanditiis minus, molestiae quaerat animi eligendi.'
        />
        <TripData
          image={Trip2}
          heading='Trip in Maldives'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque eos nihil ipsum sequi blanditiis minus, molestiae quaerat animi eligendi.'
        />
        <TripData
          image={Trip3}
          heading='Trip in Spain'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque eos nihil ipsum sequi blanditiis minus, molestiae quaerat animi eligendi.'
        />
      </div>
      <div className='tripcard'>
        <TripData
          image={Trip1}
          heading='Trip in Indonesia'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque eos nihil ipsum sequi blanditiis minus, molestiae quaerat animi eligendi.'
        />
        <TripData
          image={Trip2}
          heading='Trip in Maldives'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque eos nihil ipsum sequi blanditiis minus, molestiae quaerat animi eligendi.'
        />
        <TripData
          image={Trip3}
          heading='Trip in Spain'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque eos nihil ipsum sequi blanditiis minus, molestiae quaerat animi eligendi.'
        />
      </div>
      <div className='tripcard'>
        <TripData
          image={Trip1}
          heading='Trip in Indonesia'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque eos nihil ipsum sequi blanditiis minus, molestiae quaerat animi eligendi.'
        />
        <TripData
          image={Trip2}
          heading='Trip in Maldives'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque eos nihil ipsum sequi blanditiis minus, molestiae quaerat animi eligendi.'
        />
        <TripData
          image={Trip3}
          heading='Trip in Spain'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque eos nihil ipsum sequi blanditiis minus, molestiae quaerat animi eligendi.'
        />
      </div>
    </div>
  );
}

export default Trip;
