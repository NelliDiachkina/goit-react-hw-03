import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ searchValue, onFilter }) => {
  const nameSearchId = useId();

  return (
    <div className={css.wrapper}>
      <label htmlFor={nameSearchId}>Find contacts by name</label>
      <input
        type="text"
        id={nameSearchId}
        className={css.input}
        value={searchValue}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
