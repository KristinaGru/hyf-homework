import SearchInput from './SeacrhInput';
import { useState } from 'react';
import SearchDisplay from './SearchDisplay';
import { SearchResultContext } from './contexts/SearchResult.context';

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchSearch(query) {
    try {
      if (query) {
        setIsLoading(true);
        const res = await fetch(
          `https://api.github.com/search/users?q=${query}`
        );
        const data = await res.json();
        setIsLoading(false);
        if (res.status >= 400) {
          throw new Error(data.message);
        }

        setSearchResult(data.items);
      }
    } catch (e) {
      setSearchResult(`Error fetching: ${e.message}`);
    }
  }

  return (
    <>
      <SearchInput fetchSearch={fetchSearch} />
      <SearchResultContext.Provider value={{ searchResult, isLoading }}>
        <SearchDisplay />
      </SearchResultContext.Provider>
    </>
  );
};

export default Search;
