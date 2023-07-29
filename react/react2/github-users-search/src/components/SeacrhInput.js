const SearchInput = ({ fetchSearch }) => {
  return (
    <input
      type="text"
      onChange={(e) => fetchSearch(e.target.value)}
      placeholder="Search for user"
    />
  );
};

export default SearchInput;
