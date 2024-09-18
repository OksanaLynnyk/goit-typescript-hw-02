import { ChangeEvent, FormEvent, useState, FC } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(query);
    setQuery(''); 
  };

  return (
    <>
      <header>
      <Toaster />
        <form onSubmit={handleSubmit} className={css.searchForm}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
            className={css.formInput}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    
    </>
  );
};
