import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '08ac0d5a';
  const APP_KEY = 'a3d155e5eac8fad0958ebd44404a09fd	';

  // state to handle data that will return from the API (all our recipes are in this state)
  const [recipes, setRecipes] = useState([]);

  // this handles the search query
  const [search, setSearch] = useState('');

  // this state permits submission after clicking the search button
  const [query, setQuery] = useState('');

  // this function runs anytime the page re-renders
  useEffect(() => {
    getRecipes();
  }, [query]);

  // function to handle the calling of recipes

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  // this runs when we hit the search button on our form input
  const getSearch = e => {
    // this stops auto page refresh
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes-section">
        <div className="recipes">
          {recipes.map(recipe => (
            // this is the props
            <Recipe key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;

// note: things are taken from state and passed into props and then passed into the recipe component
