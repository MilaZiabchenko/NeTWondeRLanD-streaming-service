import './Search.css';

const Search = ({ inputText, handleChange, clearInput }) => (
  <section className='search'>
    <input
      type='text'
      value={inputText}
      onChange={handleChange}
      placeholder='Search for a show'
    />
    <div className='search-icon'>
      {inputText === '' ? (
        <i className='fas fa-search fa-2x'></i>
      ) : (
        <i className='fas fa-times fa-2x clear-btn' onClick={clearInput}></i>
      )}
    </div>
  </section>
);

export default Search;
