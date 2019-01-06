
import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';
    
class Recipes extends Component {
	    renderRecipes() {
	       const Recipes = recipes.map((post, index) => {
	       return (
	         <Recipe recipes={post} key={index}/>
	         );
	        });
	       return Recipes;
	    }
	    render() {
	        return (
	            <div className="recipes">
	             <h1>Recipes</h1>
	            {this.renderRecipes()}
	            </div>
  ); }
	}
export default Recipes;
