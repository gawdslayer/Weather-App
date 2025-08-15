import React, { useState } from 'react';
import styles from '../Modules/SearchBar.module.css';

interface SearchBarProps {
  onSearch: (location: string) => void;
  isLoading: boolean;
  currentLocation: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading, currentLocation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Only search if we have input and aren't already loading
    if (inputValue.trim() && !isLoading) {
      onSearch(inputValue.trim());
      setInputValue(''); // Clears input after search
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter city name..."
          disabled={isLoading}
          className={styles.input}
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className={styles.button}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      {currentLocation && (
        <p className={styles.currentLocation}>
          Current location: <span className={styles.currentLocationText}>{currentLocation}</span>
        </p>
      )}
    </div>
  );
};

export default SearchBar;
