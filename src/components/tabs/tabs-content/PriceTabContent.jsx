import { memo } from 'react';

const PriceTabContent = memo(() => (
  <>
    <h3 className='text-lg'>
      Choose one plan and watch everything on <span>NeTWondeRLanD</span>
    </h3>
    <table className='price-tab-table'>
      <thead>
        <tr>
          <th></th>
          <th>Basic</th>
          <th>Standard</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monthly price</td>
          <td>EUR 7.99</td>
          <td>EUR 9.99</td>
          <td>EUR 11.99</td>
        </tr>
        <tr>
          <td>Resolution</td>
          <td>720p</td>
          <td>1080p</td>
          <td>4K + HDR</td>
        </tr>
        <tr>
          <td>Ultra HD Available</td>
          <td>
            <i className='fas fa-times'></i>
          </td>
          <td>
            <i className='fas fa-times'></i>
          </td>
          <td>
            <i className='fas fa-check'></i>
          </td>
        </tr>
        <tr>
          <td>Watch on any device</td>
          <td>
            <i className='fas fa-check'></i>
          </td>
          <td>
            <i className='fas fa-check'></i>
          </td>
          <td>
            <i className='fas fa-check'></i>
          </td>
        </tr>
        <tr>
          <td>Unlimited TV shows</td>
          <td>
            <i className='fas fa-check'></i>
          </td>
          <td>
            <i className='fas fa-check'></i>
          </td>
          <td>
            <i className='fas fa-check'></i>
          </td>
        </tr>
        <tr>
          <td>Cancel anytime</td>
          <td>
            <i className='fas fa-check'></i>
          </td>
          <td>
            <i className='fas fa-check'></i>
          </td>
          <td>
            <i className='fas fa-check'></i>
          </td>
        </tr>
      </tbody>
    </table>
  </>
));

export default PriceTabContent;
