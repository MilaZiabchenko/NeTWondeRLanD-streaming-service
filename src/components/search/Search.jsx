import { memo } from 'react';
import './Search.css';

const Search = memo(({ inputValue, placeholder, handleChange, clearInput }) => (
  <section className='search'>
    <input
      type='text'
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChange}
    />
    <button className='search-icon' onClick={clearInput}>
      {inputValue === '' ? (
        <i className='fas fa-search fa-2x'></i>
      ) : (
        <i className='fas fa-times fa-2x clear-btn'></i>
      )}
    </button>
  </section>
));

export default Search;
