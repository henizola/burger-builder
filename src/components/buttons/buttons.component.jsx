import React from 'react';
import {connect} from 'react-redux'; 
import {addItem,removeItem} from '../../redux/builder/builder.action';
import './button.styles.scss'
const Buttons=({item,addItem,removeItem})=>{

   const handleAdd=()=>{
    addItem(item)
    }
    const handleRemove=()=>{
        removeItem(item)
        }
return(
    <div className='select'>
        <div className={`${item.name} pic `}/>
        <div> </div>
         <button onClick={handleAdd}>more</button>
         <button onClick={handleRemove}>less</button>
    </div>
  
)
}

const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item)),
    removeItem:item=>dispatch(removeItem(item))
})



export default connect (null,mapDispatchToProps)(Buttons)