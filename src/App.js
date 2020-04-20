import React from 'react';
import './App.css';
import BurgerBuilder from './components/burger-builder/burger-builder.component'
import {Route} from 'react-router-dom'
import NavBar from './components/navbar/nav-bar.components'
import SignIn from './components/sign-in/sign-in.components'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
class App extends React.Component {

  constructor(){
    super();
     
    this.state={
        currentUser:null
    }
  }
  unsubscribeFromAuth=null;
  
  componentDidMount(){
     this.unsubscribeFromAuth= auth.onAuthStateChanged(async user=>{
        this.setState({currentUser:user});
        console.log(user);
        createUserProfileDocument(user);
      })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render()
  { return (
    <div>
      <NavBar user={this.state.currentUser}/>
    <Route exact path='/home' component={BurgerBuilder}/> 
    <Route exact path='/sign-in' component={SignIn}/>
    </div>
   
  
    );
  }
  
}

export default App;
