import React, { useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '08ac0d5a';
  const APP_KEY = 'a3d155e5eac8fad0958ebd44404a09fd	';

  // state to handle data that will return from the API (all our recipes are in this state)
  const [recipes, setRecipes] = useState([]);

  // this function runs anytime the page re-renders
  useEffect( () => {
    getRecipes();
  }, []);

  // function to handle the calling of recipes

  const getRecipes = async () => {
    const response = await fetch (
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">Search</button>
      </form>
      {recipes.map(recipe => (
        // this is the props
        <Recipe key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
        />
      ))}
    </div>
  )
}

export default App;

// note: things are taken from state and passed into props and then passed into the recipe component
