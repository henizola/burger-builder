import React from 'react'
import {ReactComponent as Logo } from '../../assets/1531643.svg'
import './nav-bar.styles.scss'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
const NavBar=({user})=>{
    return <nav>
        <Link to='/home' >
            <Logo className='logo'/>
        </Link>
     
     <Link to='/sign-in' className='option'>
                 {user?
                 <h2 onClick={()=>auth.signOut()}>SIGN-OUT</h2>:<h1>sign-in</h1>} 
            </Link>
    </nav>
}
export default NavBar;