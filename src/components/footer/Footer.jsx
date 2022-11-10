import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className='footer container'>
    <div className='footer-cols'>
      <ul>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
        <li>
          <Link to='/ways-to-watch'>Ways To Watch</Link>
        </li>
        <li>
          <Link to='/investor-relations'>Investor Relations</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/help-center'>Help Center</Link>
        </li>
        <li>
          <Link to='/terms-of-use'>Terms Of Use</Link>
        </li>
        <li>
          <Link to='/contact-us'>Contact Us</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/account'>Account</Link>
        </li>
        <li>
          <Link to='/privacy'>Privacy</Link>
        </li>
        <li>
          <Link to='/jobs'>Jobs</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/media-center'>Media Center</Link>
        </li>
        <li>
          <Link to='/buy-gift-cards'>Buy Gift Cards</Link>
        </li>
        <li>
          <Link to='/legal-notices'>Legal Notices</Link>
        </li>
      </ul>
    </div>
    <div className='copyright text-center'>
      <p>
        Copyright &copy; 2021-
        {new Date().getFullYear()}
        <span>NeTWondeRLanD </span>
      </p>
    </div>
  </footer>
);

export default Footer;
