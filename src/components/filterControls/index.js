import React, { useState, useEffect } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 
import {Menu,Input,Icon} from 'semantic-ui-react'
import { getGenres } from "../../api/tmdb-api";

const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  }; // filetring of movie list

  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <Menu id = "menu" >

    <Menu.Item id = "menuitem">
      <Icon name="filter"/>
    </Menu.Item>

    <Menu.Item id = "menuitem">
      Filter By:
    </Menu.Item>
    <Menu.Item id = "menuitem">
      Name
    </Menu.Item>

    <Menu.Item id = "menuitem">
    <Input  type="text" icon='film' onChange={handleTextChange} iconPosition='left' placeholder='Search movies...' />
     
    </Menu.Item>

    <Menu.Item id = "menuitem">
      Genres
    </Menu.Item>

    <Menu.Item id = "menuitem">
    <select id="genre" onChange={handleGenreChange}>
        {context.genres.map(genre => {
          return (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </Menu.Item>
</Menu>
  );
};

export default FilterControls;