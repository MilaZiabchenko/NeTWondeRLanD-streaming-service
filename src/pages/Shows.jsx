import useAxios from '../hooks/useAxios';
import useInput from '../hooks/useInput';
import useDebounce from '../hooks/useDebounce';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import ShowsGrid from '../components/showsGrid/ShowsGrid';
import Footer from '../components/footer/Footer';

const Shows = () => {
  const {
    isLoading,
    data: allShows,
    error,
  } = useAxios('https://api.tvmaze.com/shows');

  const { value: inputText, handleChange, clearInput } = useInput('');
  const debouncedText = useDebounce(inputText, 250);

  const searchedShows = allShows.filter(show =>
    show.name.toLowerCase().startsWith(debouncedText.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className='main'>
        <h2 className='text-lg'>Shows</h2>
        {error ? (
          <h3 className='text-lg'>
            <span>{error} :(</span>
          </h3>
        ) : (
          <>
            <Search
              inputText={inputText}
              handleChange={handleChange}
              clearInput={clearInput}
            />
            <ShowsGrid
              isLoading={isLoading}
              shows={searchedShows ? searchedShows : allShows}
            />
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
