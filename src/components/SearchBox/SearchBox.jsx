import css from './SearchBox.module.css';

const SearchBox = ({ searchValue, onFilter }) => {
  return (
    <div className={css.wrapper}>
      <label htmlFor="search-inpt">Find contacts by name</label>
      <input
        type="text"
        id="search-inpt"
        className={css.input}
        value={searchValue}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
