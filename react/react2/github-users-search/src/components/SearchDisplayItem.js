import { useContext } from 'react';
import { SearchResultContext } from './contexts/SearchResult.context';

const SearchDisplayItem = () => {
  const searchResult = useContext(SearchResultContext).searchResult;
  if (typeof searchResult === 'string') {
    return <li>{searchResult}</li>;
  } else if (searchResult && searchResult.length > 0) {
    return searchResult.map((user) => {
      return <li key={user.id}>{user.login}</li>;
    });
  } else {
    return <li>No results</li>;
  }
};

export default SearchDisplayItem;
