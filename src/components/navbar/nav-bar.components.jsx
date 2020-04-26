import React from 'react'
import {ReactComponent as Logo } from '../../assets/1531643.svg'
import './nav-bar.styles.scss'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
const NavBar=({currentUser})=>{
    console.log(currentUser);
    return <nav>
        <Link to='/' >
            <Logo className='logo'/>
        </Link>
     
     <Link to='/sign-in' className='option'>
                 {currentUser?
                 <h2 onClick={()=>auth.signOut()}>SIGN-OUT</h2>:<h1>sign-in</h1>} 
            </Link>
    </nav>
}

const mapStateToProps=state=>({
    currentUser:state.user.currentUser
})

export default connect (mapStateToProps)(NavBar);