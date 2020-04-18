import React from 'react';
// import '../builder/burger-builder.styles.css';
import './preview.styles.scss'


const Preview =({salad,cheese,beff,bacon,breadTop,breadBottom,egg})=>{
    return(
        <div>
        {breadTop ? <div className='bread-top'/> : ''}
        {salad?<div className='salad'/>:''}
        {bacon?<div className='bacon'/>:''}
        {egg?<div className='egg'/>:''}
        {beff ? <div className='beff'/> :''}
        {cheese ?<div className='cheese'/>:''}
        {breadBottom ? <div className='bread-bottom'/> : ''}
         </div> 
    );
}
export default Preview;