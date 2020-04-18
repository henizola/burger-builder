import React from 'react'
import Preview from '../preview/preview.comopnents';
import Builder from '../builder/builder.component'
class BurgerBuilder extends React.Component{

    constructor(){
        super();
        this.state={
            items:[
                {
                    name:'beff',
                    quantity:0,
                    id:1
                },
               {
                    name:'cheese',
                    quantity:0,
                    id:2
                },
               {
                    name:'bacon',
                    quantity:0,
                    id:3
                },
              {
                    name:'salad',
                    quantity:0,
                    id:4
                }
            ]
        }
            
                  
                    
         
            }
                
changeHandler=(id)=>{
 
    let index= this.state.items.findIndex((item)=>item.id===id);
    const newObject={...this.state.items};
    // console.log(newObject[0].quantity);
    newObject[index].quantity=1;
    console.log(newObject[index].quantity,newObject[index].name);
    this.setState({...this.state.items,...newObject});
    console.log(this.state.items[index].quantity);
    
    
}
subteructHandler=(id)=>{
 
    let index= this.state.items.findIndex((item)=>item.id===id);
    const newObject={...this.state.items};
    // console.log(newObject[0].quantity);
    newObject[index].quantity=0;
    console.log(newObject[index].quantity,newObject[index].name);
    this.setState({...this.state.items,...newObject});
    console.log(this.state.items[index].quantity);
    
    
}
  
    render() {
     
        // const {tuna,egg,beff,cheese}=this.state;
        // this.state.forEach(element=>console.log(element.name));
        return(
            <div>
                {/* <Preview egg={egg} beff={beff} tuna={tuna} cheese={cheese} /> */}
                
                <Builder changeHandler={this.changeHandler} 
                subteructHandler={this.subteructHandler}
                cheese={this.state.items[1].quantity} 
                beff={this.state.items[0].quantity} 
                bacon={this.state.items[2].quantity}
                 salad={this.state.items[3].quantity}  />
               
            </div>
        
        );
    }

}
export default BurgerBuilder;