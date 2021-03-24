import React from 'react';

const Recipe = ({title, image, calories, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" />
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