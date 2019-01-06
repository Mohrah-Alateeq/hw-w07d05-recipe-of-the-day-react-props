import React, { Component } from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';


class RecipeOfTheDay extends Component {
    renderIngredients(){
    const a =recipeOfTheDay.ingredients.map((post, index) =>{
     return(
         <Ingredient Ingredient={post} key={index}/>
     )
  });
  return a;
    };
    render(){
        return(
    <div className="Ingredient" >
    <h1>Recipe Of The Day </h1>
    <p>{recipeOfTheDay.name}</p>
    <p>Description</p>
    <p>{recipeOfTheDay.description}</p>
    <p> Ingredient </p>
    <p>{this.renderIngredients}</p>
    </div>
        )
}}

export default RecipeOfTheDay ;
