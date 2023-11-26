import { memo } from 'react';
import BETH_1 from '../../../assets/beth_1.jpg';
import BETH_2 from '../../../assets/beth_2.jpg';
import BETH_3 from '../../../assets/beth_3.jpg';
import BETH_4 from '../../../assets/beth_4.jpg';
import WatchTabCard from './WatchTabCard';

const WatchTabContent = memo(() => (
  <>
    <h2 className='text-lg'>
      Watch TV shows and movies anytime, anywhere — personalized for you.
    </h2>
    <div className='watch-tab-cards'>
      <WatchTabCard
        source={BETH_1}
        title='Watch on your TV'
        text='Streaming Media Players, Smart TVs, Game
                Consoles and more.'
      />
      <WatchTabCard
        source={BETH_2}
        title='Stream on your Blu-ray player'
        text='Enjoy sights and sounds, using Blu-ray player or
                Home Theater System.'
      />
      <WatchTabCard
        source={BETH_3}
        title='Watch instantly or download for later'
        text='Available on phone and tablet, wherever you go.'
      />
      <WatchTabCard
        source={BETH_4}
        title='Use any computer'
        text={
          <>
            <span>NeTWondeRLanD</span> is optimized for today’s browsers so you
            can watch on your PC or laptop.
          </>
        }
      />
    </div>
  </>
));

export default WatchTabContent;
