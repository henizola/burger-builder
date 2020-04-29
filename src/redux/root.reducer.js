import { combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import builderReducer from './builder/builder.reducer'

export default combineReducers({
    user:userReducer,
    builder:builderReducer
})

