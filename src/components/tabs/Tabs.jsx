import Tab1Content from './tab-1/Tab1Content';
import Tab2Content from './tab-2/Tab2Content';
import Tab3Content from './tab-3/Tab3Content';
import useToggleIndex from '../../hooks/useToggleIndex';
import './Tabs.css';

const FIRST_TAB = 1;
const SECOND_TAB = 2;
const THIRD_TAB = 3;

const Tabs = () => {
  const [tabIndex, setTabIndex] = useToggleIndex(FIRST_TAB);

  return (
    <>
      <section className='tabs'>
        <div className='container'>
          <div
            id='tab-1'
            className={tabIndex === FIRST_TAB ? 'tab-border' : null}
            onClick={() => setTabIndex(FIRST_TAB)}
          >
            <i className='fas fa-tablet-alt fa-3x'></i>
            <p>Watch anywhere</p>
          </div>
          <div
            id='tab-2'
            className={tabIndex === SECOND_TAB ? 'tab-border' : null}
            onClick={() => setTabIndex(SECOND_TAB)}
          >
            <i className='fas fa-door-open fa-3x'></i>
            <p>Cancel anytime</p>
          </div>
          <div
            id='tab-3'
            className={tabIndex === THIRD_TAB ? 'tab-border' : null}
            onClick={() => setTabIndex(THIRD_TAB)}
          >
            <i className='fas fa-tags fa-3x'></i>
            <p>Pick your price</p>
          </div>
        </div>
      </section>
      <section className='tab-content'>
        <div className='container'>
          <Tab1Content className={tabIndex === FIRST_TAB ? 'show' : null} />
          <Tab2Content className={tabIndex === SECOND_TAB ? 'show' : null} />
          <Tab3Content className={tabIndex === THIRD_TAB ? 'show' : null} />
        </div>
      </section>
    </>
  );
};

export default Tabs;
