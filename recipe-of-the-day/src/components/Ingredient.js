import React, { Component } from 'react';
const Ingredient = (prop) => {
    const ingredients = prop.ingredient;


    return (
        <div className="ingr">
            <ul>
            <li> {ingredients.ingredient}</li>
            <li>{ingredients.amount}</li>
            </ul>
        </div> 
        )}



export default Ingredient;