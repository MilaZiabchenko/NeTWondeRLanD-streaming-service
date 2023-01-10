import { useMemo } from 'react';
import useAxios from '../hooks/useAxios';
import useInput from '../hooks/useInput';
import useDebounce from '../hooks/useDebounce';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import ShowsGrid from '../components/shows/ShowsGrid';
import Footer from '../components/footer/Footer';
import spinner from '../assets/spinner.gif';

const Shows = () => {
  const {
    isLoading,
    data: shows,
    error,
  } = useAxios('https://api.tvmaze.com/shows');
  const { value: inputText, handleChange, clearInput } = useInput('');
  const debouncedQuery = useDebounce(inputText, 250);

  const allShows = useMemo(() => shows, [shows]);
  const searchedShows = useMemo(
    () =>
      shows.filter(show =>
        show.name.toLowerCase().startsWith(debouncedQuery.toLowerCase())
      ),
    [shows, debouncedQuery]
  );

  return (
    <>
      <Header />
      <main className='main'>
        <h2 className='text-lg'>Shows</h2>
        {isLoading && <img src={spinner} className='spinner' alt='' />}
        {error ? (
          <h3 className='text-lg'>
            <span>Oops, ${error.message} :(</span>
          </h3>
        ) : (
          <>
            <Search
              inputText={inputText}
              handleChange={handleChange}
              clearInput={clearInput}
            />
            <ShowsGrid shows={searchedShows ? searchedShows : allShows} />
          </>
        )}
        {inputText !== '' && searchedShows.length === 0 && (
          <h3 className='text-lg'>
            <span>No matches found</span>
          </h3>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Shows;
