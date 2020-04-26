import {items} from '../items.utils'

const INITIAL_STATE={
    items:items
}

const itemReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
        return state;
    }
}