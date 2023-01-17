import React from 'react';
import { useAppContex } from "../../context";
import Input from "../common/Input";

const SearchInput = () => {
  const { searchValue, setSearchValue, setShowMovieList } = useAppContex();

  const handleSearchChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleFocus = (e) => {
    setShowMovieList(true);
  };

  return (
    <Input
      placeholder="Enter movie name"
      onChange={handleSearchChange}
      onFocus={handleFocus}
      value={searchValue}
    />
  );
};

export default SearchInput;
