import {ingridiants} from '../items.utils';
import {addIngrident,removeIngrident} from './builder.utils';
const INITIAL_STATE={
    items:ingridiants,
    userChoice:[]
}


const builderReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'ADD_INGRIDENT':
            return {
                ...state,
                userChoice:addIngrident(state.userChoice,action.payload)
            }
        case 'REMOVE_INGRIDENT':
            return{
                ...state,
                userChoice:removeIngrident(state.userChoice,action.payload)
            }
        default: return state;
    }
}

export default builderReducer;
