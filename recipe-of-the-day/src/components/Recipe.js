import React from 'react';



  

const Recipe = (prop) => {
    const recipes = prop.recipes;
    return (
        <div className="recipe">
            <p>Name: {recipes.name}</p>
            <p>Servings: {recipes.servings}</p>
            <p>Category: {recipes.category}</p>
        </div>
    )
}


export default Recipe;
