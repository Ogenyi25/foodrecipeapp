import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, image, calories, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="" />
            <h4>CALORIES:{calories}</h4>
            <h4>Ingredients:</h4>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;