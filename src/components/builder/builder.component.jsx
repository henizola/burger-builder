import React from 'react';
import './builder.styles.scss'
import Preview from '../preview/preview.comopnents'

const Builder=({changeHandler,bacon,beff,cheese,salad,subteructHandler,price})=>{
        return(
            <div className='container'>
                <div className='view'>
                        <Preview breadTop={true} className='top'/>  
                        {
                            bacon?'':beff?'':cheese?'':salad?'':<h1>use the constructor below</h1>
                        } 
                        <Preview bacon={bacon} beff={beff} cheese={cheese} salad={salad}/>
                        <Preview breadBottom={true}  className='bottom'/>
                </div>
                    <div className='price'>total= ${price}</div>
                <div className='builder'>
                    <div className='item'>
                        <div className='the-item'>
                             <Preview bacon={true} className='egg'/> 
                         </div>
                     <button className='button' onClick={()=>changeHandler(1)}>+</button>
                        <button className='button'  onClick={()=>subteructHandler(1)}>-</button>
                    </div>
                    <div className='item'>
                        <div className='the-item'>
                        <Preview beff={true} className='beff'/> 
                         </div>
                     <button className='button '  onClick={()=>changeHandler(2)}>+</button>
                     <button className='button' onClick={()=>subteructHandler(2)}>-</button>
                    </div>
                   
                    <div className='item'>
                        <div className='the-item'>
                        <Preview cheese={true} className='beff'/> 
                         </div>
                     <button className='button' onClick={()=>changeHandler(3)}>+</button>
                     <button className='button'  onClick={()=>subteructHandler(3)}>-</button>
                    </div>
                    <div className='item'>
                        <div className='the-item'>
                        <Preview salad={true} className='beff'/> 
                         </div>
                     <button onClick={()=>changeHandler(4)}>+</button>
                     <button  onClick={()=>subteructHandler(4)}>-</button>
                    </div>
                  </div>
                 </div>
         
        );
}
export default Builder;





                