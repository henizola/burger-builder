
export const addIngrident=(pervItems,ingridentToAdd)=>{

    const itemExist=pervItems.find(item=>item.id===ingridentToAdd.id)

    if (itemExist){
        pervItems.map((item)=>item.id===ingridentToAdd.id?item.quantity+=1:item);
        return [...pervItems]
    }

    else{
        ingridentToAdd.quantity=1;
        return [...pervItems,ingridentToAdd]
    }
    
}
export const removeIngrident=(prevItems,ingridentToRemove)=>{
    const itemExist=prevItems.find(item=>item.id===ingridentToRemove.id&&item.quantity!==0)
    if (itemExist){
        prevItems.map((item)=>item.id===ingridentToRemove.id&&item.ingridentToRemove!==0?item.quantity-=1:item);
        return [...prevItems]
    }
    else 
    return prevItems

    
}