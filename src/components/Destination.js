import raja1 from '../assets/raja-1.webp';
import raja2 from '../assets/raja-2.jpg';
import goa1 from '../assets/goa-1.webp';
import goa2 from '../assets/goa-2.cms';
import hp1 from '../assets/hp-1.webp';
import hp2 from '../assets/hp-2.png';
import './DestinationStyles.css';
import DestinationData from './destinationData';

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destinations</h1>
      <p>Look where the world loves to travel...</p>
      <DestinationData
        className='first-des'
        heading='Rajasthan: The Land of Maharajas'
        text='Rajasthan, located in the northwestern part of India, is a mesmerizing blend of vibrant colors, rich history, and regal architecture. Known as the "Land of Maharajas," Rajasthan is famous for its majestic palaces, formidable forts, and bustling markets. Cities like Jaipur, the Pink City, with its Hawa Mahal and City Palace; Udaipur, the City of Lakes, with the romantic Lake Palace; and Jodhpur, the Blue City, dominated by the imposing Mehrangarh Fort, offer a glimpse into the opulent lifestyle of the Rajput kings. The Thar Desert, dotted with camel caravans and rustic villages, adds to the state&apos;s unique charm. Visitors to Rajasthan are immersed in a world of royal grandeur, folk music, and traditional Rajasthani cuisine.'
        img1={raja1}
        img2={raja2}
      />
      <DestinationData
        className='first-des-reverse'
        heading='Goa: The Beach Paradise'
        text="Nestled on the southwestern coast of India, Goa is a tropical haven renowned for its sun-kissed beaches, lively nightlife, and Portuguese-influenced architecture. The state attracts travelers with its golden sands, azure waters, and a laid-back atmosphere. Whether it's the vibrant beach parties in North Goa, the serene beaches of South Goa, or the historic churches in Old Goa, the state offers a diverse range of experiences. Goa's spice plantations, bustling markets, and delectable seafood further contribute to its allure. From water sports to cultural festivals, Goa is a destination that caters to a wide spectrum of interests, making it a perennial favorite among tourists."
        img1={goa1}
        img2={goa2}
      />
      <DestinationData
        className='first-des'
        heading='Himachal Pradesh: The Abode of the Himalayas'
        text="Himachal Pradesh, nestled in the lap of the Himalayas in northern India, is a haven for nature lovers and adventure enthusiasts. With its snow-capped peaks, lush valleys, and meandering rivers, Himachal Pradesh offers a breathtaking panorama of the mountains. Popular destinations like Shimla, Manali, and Dharamshala are known for their scenic landscapes, Tibetan monasteries, and opportunities for trekking and skiing. The state's diverse topography includes alpine meadows, dense forests, and pristine lakes, providing a serene escape from the hustle and bustle of city life. Himachal Pradesh is not just a destination; it's an invitation to explore the untamed beauty of the Himalayas."
        img1={hp1}
        img2={hp2}
      />
    </div>
  );
};

export default Destination;
