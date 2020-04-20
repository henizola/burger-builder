import React from 'react'
import Builder from '../builder/builder.component'
class BurgerBuilder extends React.Component{

    constructor(){
        super();
        this.state={
            items:[ {name:'beff', quantity:0,price:25,id:1},
            {name:'cheese', quantity:0,price:10,id:2 }, 
            {name:'bacon',quantity:0,price:15,id:3}, 
            {name:'salad',quantity:0,price:5,id:4 } ],
       
        }
         this.price=4;
     }
                
changeHandler=(id)=>{
 
    let index= this.state.items.findIndex((item)=>item.id===id);
    const newObject={...this.state.items};
    this.price+=this.state.items[index].price;
    newObject[index].quantity=1;
    this.setState({...this.state.items,...newObject});
}
subteructHandler=(id)=>{
    let index= this.state.items.findIndex((item)=>item.id===id);
    const newObject={...this.state.items};
    this.price<=4?this.price=4:this.price-=this.state.items[index].price;
    newObject[index].quantity=0;
    this.setState({...this.state.items,...newObject});
}
  
    render() {
        return(
            <div> 
                <Builder changeHandler={this.changeHandler} 
                subteructHandler={this.subteructHandler}
                cheese={this.state.items[1].quantity} 
                beff={this.state.items[0].quantity} 
                bacon={this.state.items[2].quantity}
                 salad={this.state.items[3].quantity}  
                 price={this.price}/>
                </div>
        
        );
    }

}
export default BurgerBuilder;