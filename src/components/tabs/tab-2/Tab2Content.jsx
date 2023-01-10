import cancel_image from '../../../assets/cancel_image.jpg';
import './Tab2Content.css';

const Tab2Content = ({ className }) => (
  <section id='tab-2-content' className={className}>
    <div className='tab-2-content-inner'>
      <div>
        <p className='text-lg'>
          If you decide <span> NeTWondeRLanD</span> is not for you — no problem.
          No commitment. Cancel online anytime.
        </p>
      </div>
      <div className='cancel-image'>
        <img src={cancel_image} alt='' />
      </div>
    </div>
  </section>
);

export default Tab2Content;
