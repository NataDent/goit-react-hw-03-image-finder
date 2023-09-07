import React from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmit, onChange }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit} autoComplete="off">
        <SearchFormInput
          type="search"
          onChange={onChange}
          value={this.state.searchQuery}
          name="searchQuery"
          placeholder="Search images and photos"
          autoFocus
        />
        <SearchFormButton>Search</SearchFormButton>
      </SearchForm>
    </Header>
  );
};
