import React, { Component } from 'react';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import Recipes from './components/Recipes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Recipes/> 
          <RecipeOfTheDay/>
         
      </div>
    );
  }
}

export default App;
