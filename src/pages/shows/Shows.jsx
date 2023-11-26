import { useDeferredValue, useMemo } from 'react';
import { useTitle, useAxios, useInput } from '../../hooks';
import {
  Header,
  PrimaryNavigation,
  LoadingSpinner,
  ErrorMessage,
  Search,
  EmptyList,
  Footer
} from '../../components';
import ShowsList from './ShowsList';
import './Shows.css';

const Shows = () => {
  useTitle('Shows');

  const {
    isLoading,
    error,
    data: shows
  } = useAxios('https://api.tvmaze.com/shows');

  const { value: searchQuery, handleChange, clearInput } = useInput();
  const deferredQuery = useDeferredValue(searchQuery);

  const allShows = useMemo(() => shows, [shows]);
  const searchedShows = useMemo(
    () =>
      allShows.filter(({ name }) =>
        name?.toLowerCase().startsWith(deferredQuery.toLowerCase())
      ),
    [allShows, deferredQuery]
  );

  return (
    <>
      <Header className='primary-header'>
        <PrimaryNavigation />
      </Header>
      <main className='main-container'>
        <h2 className='text-xl'>Shows</h2>
        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage error={error} />}
        <Search
          inputValue={searchQuery}
          placeholder='Search show...'
          handleChange={handleChange}
          clearInput={clearInput}
        />
        {deferredQuery !== '' && searchedShows.length === 0 ? (
          <EmptyList text='No shows match your search' />
        ) : (
          <ShowsList shows={searchedShows ?? allShows} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Shows;
