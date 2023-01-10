import './Tab3Content.css';

const Tab3Content = ({ className }) => (
  <section id='tab-3-content' className={className}>
    <div>
      <p className='text-lg'>
        Choose one plan and watch everything on <span> NeTWondeRLanD</span>
      </p>
    </div>

    <table className='table'>
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
          <td>EUR7.99</td>
          <td>EUR9.99</td>
          <td>EUR11.99</td>
        </tr>
        <tr>
          <td>Resolution</td>
          <td>480p</td>
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
  </section>
);

export default Tab3Content;
