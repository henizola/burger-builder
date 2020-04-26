import React from 'react';
import Form from '../form/form.component'
import CustomButton from '../custom-button/custom-button.component'
import './signin.styles.scss'
import {signInWithGoogle} from '../../firebase/firebase.utils'
class SignIn extends React.Component{
  constructor(){
    super();
    this.state={
          email:'',
          password:''
    }
  }

  handleChange=(event)=>{
    const {name,value}=event.target;
    this.setState({[name]:value})
  }


  render()
  {
    const {email,password}=this.state;
       return(
      <form >
          <Form  name='email' type='email' lable='Email' valu={email}  handleChange={this.handleChange}  />
          <Form  name='Password' type='password' lable='Password' valu={password}  
          handleChange={this.henadleChange}/>
         <div className='buttons'>
           <CustomButton>signin</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google-Signin</CustomButton>
          </div> 
           </form>
        
    );
  }
 
}
export default SignIn;