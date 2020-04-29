import React from 'react'
import Builder from '../builder/builder.component'
import Preview from '../preview/preview.comopnents'
import './builder.styles.scss'
import {connect} from 'react-redux'
const BurgerBuilder=({price})=> {
        return(
            <div className='containers'>
                <div className="preview">  
                    <div className="burger">
                            <Preview />
                    </div>
                <div style={{marginTop:'10px',color:'white',fontSize:'larger'}}>{price}</div>
                </div> 
                <div className='builder'>
                     <Builder/>
                </div>
            </div>
        
        );
    }
    const mapStateToProps=state=>({
        price:state.builder.userChoice.reduce((acc,value)=>acc+value.quantity*value.price,0)
    })
export  default connect (mapStateToProps) (BurgerBuilder);