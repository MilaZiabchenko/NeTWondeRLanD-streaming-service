import { memo } from 'react';
import cancel_image from '../../../assets/cancel_image.jpg';

const CancelTabContent = memo(() => (
  <div className='cancel-tab-content-items'>
    <h3 className='text-lg'>
      If you decide <span>NeTWondeRLanD</span> is not for you — no problem. No
      commitment. Cancel online anytime.
    </h3>
    <img className='cancel-tab-image' src={cancel_image} alt='Cancel' />
  </div>
));

export default CancelTabContent;
