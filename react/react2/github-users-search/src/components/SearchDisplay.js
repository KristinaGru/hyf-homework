import { useContext } from 'react';
import SearchDisplayItem from './SearchDisplayItem';
import { SearchResultContext } from './contexts/SearchResult.context';

const SearchDisplay = () => {
  const isLoading = useContext(SearchResultContext).isLoading;
  return <ul>{isLoading ? <li>loading...</li> : <SearchDisplayItem />}</ul>;
};

export default SearchDisplay;
