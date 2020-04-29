import React from 'react';
import './builder.styles.scss';
import {connect} from 'react-redux';
import Buttons from '../buttons/buttons.component';


const Builder=({items})=>{
  return(
    <div className='builder'>
      {
          items.map(element=><Buttons key={element.id}item={element}/>)
      }
    </div>
    
  )

}
const mapStateToProps=state=>({
    items:state.builder.items,
})


export default connect(mapStateToProps)(Builder);







// <div className='builder'>
// <div className='item'>
//     <div className='the-item'>
//          <Preview bacon={true} className='egg'/> 
//      </div>
//  <button className='button' onClick={()=>changeHandler(1)}>+</button>
//     <button className='button'  onClick={()=>subteructHandler(1)}>-</button>
// </div>
// <div className='item'>
//     <div className='the-item'>
//     <Preview beff={true} className='beff'/> 
//      </div>
//  <button className='button '  onClick={()=>changeHandler(2)}>+</button>
//  <button className='button' onClick={()=>subteructHandler(2)}>-</button>
// </div>

// <div className='item'>
//     <div className='the-item'>
//     <Preview cheese={true} className='beff'/> 
//      </div>
//  <button className='button' onClick={()=>changeHandler(3)}>+</button>
//  <button className='button'  onClick={()=>subteructHandler(3)}>-</button>
// </div>
// <div className='item'>
//     <div className='the-item'>
//     <Preview salad={true} className='beff'/> 
//      </div>
//  <button onClick={()=>changeHandler(4)}>+</button>
//  <button  onClick={()=>subteructHandler(4)}>-</button>
// </div>
// </div>
