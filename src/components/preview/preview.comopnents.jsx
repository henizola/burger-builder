import React from 'react';
import './preview.styles.scss'
import {connect} from 'react-redux'


const Preview =({userChoice})=>{
   
    return(
        <div>
            <div className='bread-top'/> 
                {
                    userChoice.length?
                     userChoice.map(element=>element.quantity?<div className={`${element.name}`}>{element.quantity}</div>:'')
                     :<h1>no Items</h1>
                }
            <div className='bread-bottom'/> 
        </div> 
    );
}

const mapStateToProps=state=>({
    userChoice:state.builder.userChoice
})

export default connect (mapStateToProps) (Preview);
