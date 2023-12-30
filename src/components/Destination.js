import Mountain1 from '../assets/1.jpg';
import Mountain2 from '../assets/2.jpg';
import Mountain3 from '../assets/3.jpg';
import Mountain4 from '../assets/4.jpg';
import './DestinationStyles.css';
import DestinationData from './destinationData';

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destinations</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <DestinationData
        className='first-des'
        heading='Taal Volcano, Batangas'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nostrum sunt provident ex qui quae. Aperiam minus recusandae,
            voluptatem architecto ut voluptate voluptates expedita, quos tempore
            a fugit sapiente deleniti repellat dolorum obcaecati! Doloremque nam
            nobis id expedita? Et fugiat reprehenderit ad nemo officia ab,
            dignissimos a sit corrupti aliquid!'
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className='first-des-reverse'
        heading='Lorem Ipsum Dernere'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nostrum sunt provident ex qui quae. Aperiam minus recusandae,
            voluptatem architecto ut voluptate voluptates expedita, quos tempore
            a fugit sapiente deleniti repellat dolorum obcaecati! Doloremque nam
            nobis id expedita? Et fugiat reprehenderit ad nemo officia ab,
            dignissimos a sit corrupti aliquid!'
        img1={Mountain3}
        img2={Mountain4}
      />
      <DestinationData
        className='first-des'
        heading='Lorem Ipsum Dernere'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nostrum sunt provident ex qui quae. Aperiam minus recusandae,
            voluptatem architecto ut voluptate voluptates expedita, quos tempore
            a fugit sapiente deleniti repellat dolorum obcaecati! Doloremque nam
            nobis id expedita? Et fugiat reprehenderit ad nemo officia ab,
            dignissimos a sit corrupti aliquid!'
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
