import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, image, calories, ingredients}) => {
    return (
        <div className={style.recipe}>
            <div className={style.title}>{title}</div>
            <img className={style.image} src={image} alt="" />
            <h4>CALORIES: {calories}</h4>
            <h4 className={style.ingredient}>Ingredients:</h4>
            <ol>
                {ingredients.map(ingredient => (
                    <li className={style.ingredients}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;