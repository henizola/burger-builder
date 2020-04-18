import React from 'react';
import './App.css';
import BurgerBuilder from './components/burger-builder/burger-builder.component'


class App extends React.Component {

  constructor(){
    super();
     
    this.state={
      chees:true,
      beff:true,
      egg:true,
      tuna:true
    }
  }
  render()
  { return (
    <BurgerBuilder/>
    );
  }
  
}

export default App;
