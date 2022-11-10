import Beth_1 from '../../../images/beth_1.jpg';
import Beth_2 from '../../../images/beth_2.jpg';
import Beth_3 from '../../../images/beth_3.jpg';
import Beth_4 from '../../../images/beth_4.jpg';
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
        source={Beth_1}
        title='Watch on your TV'
        text='Streaming Media Players, Smart TVs, Game
                Consoles and more.'
      />
      <Tab1ContentItem
        source={Beth_2}
        title='Stream on your Blu-ray player'
        text='Enjoy sights and sounds, using Blu-ray player or
                Home Theater System.'
      />
      <Tab1ContentItem
        source={Beth_3}
        title='Watch instantly or download for later'
        text='Available on phone and tablet, wherever you go.'
      />
      <Tab1ContentItem
        source={Beth_4}
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
