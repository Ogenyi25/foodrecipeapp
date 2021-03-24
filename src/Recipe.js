import React from 'react';

const Recipe = ({title, image, calories}) => {
    return (
        <div>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <h4>CALORIES:{calories}</h4>
        </div>
    )
}

export default Recipe;