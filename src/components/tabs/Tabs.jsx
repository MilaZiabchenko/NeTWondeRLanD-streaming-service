import { useTab } from '../../hooks';
import { WATCH_ANYWHERE, CANCEL_ANYTIME, PICK_YOUR_PRICE } from './constants';
import WatchTabContent from './tabs-content/WatchTabContent';
import PriceTabContent from './tabs-content/PriceTabContent';
import CancelTabContent from './tabs-content/CancelTabContent';
import './Tabs.css';

const Tabs = () => {
  const [tab, switchTab] = useTab(WATCH_ANYWHERE);

  return (
    <>
      <section className='tabs'>
        <div className='container'>
          <div
            className={tab === WATCH_ANYWHERE ? 'tab-border' : null}
            onClick={() => switchTab(WATCH_ANYWHERE)}
          >
            <i className='fas fa-tablet-alt fa-3x'></i>
            <p>{WATCH_ANYWHERE}</p>
          </div>

          <div
            className={tab === PICK_YOUR_PRICE ? 'tab-border' : null}
            onClick={() => switchTab(PICK_YOUR_PRICE)}
          >
            <i className='fas fa-tags fa-3x'></i>
            <p>{PICK_YOUR_PRICE}</p>
          </div>
          <div
            className={tab === CANCEL_ANYTIME ? 'tab-border' : null}
            onClick={() => switchTab(CANCEL_ANYTIME)}
          >
            <i className='fas fa-door-open fa-3x'></i>
            <p>{CANCEL_ANYTIME}</p>
          </div>
        </div>
      </section>
      <section className='selected-tab-content'>
        <div className='container'>
          {tab === WATCH_ANYWHERE && <WatchTabContent />}
          {tab === PICK_YOUR_PRICE && <PriceTabContent />}
          {tab === CANCEL_ANYTIME && <CancelTabContent />}
        </div>
      </section>
    </>
  );
};

export default Tabs;
