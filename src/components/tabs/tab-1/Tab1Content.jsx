import BETH_1 from '../../../assets/beth_1.jpg';
import BETH_2 from '../../../assets/beth_2.jpg';
import BETH_3 from '../../../assets/beth_3.jpg';
import BETH_4 from '../../../assets/beth_4.jpg';
import Tab1ContentItem from './Tab1ContentItem';
import './Tab1Content.css';

const Tab1Content = ({ className }) => (
  <section id='tab-1-content' className={className}>
    <div className='tab-1-content-top'>
      <p className='text-lg'>
        Watch TV shows and movies anytime, anywhere — personalized for you.
      </p>
    </div>
    <div className='tab-1-content-bottom'>
      <Tab1ContentItem
        source={BETH_1}
        title='Watch on your TV'
        text='Streaming Media Players, Smart TVs, Game
                Consoles and more.'
      />
      <Tab1ContentItem
        source={BETH_2}
        title='Stream on your Blu-ray player'
        text='Enjoy sights and sounds, using Blu-ray player or
                Home Theater System.'
      />
      <Tab1ContentItem
        source={BETH_3}
        title='Watch instantly or download for later'
        text='Available on phone and tablet, wherever you go.'
      />
      <Tab1ContentItem
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
  </section>
);

export default Tab1Content;
