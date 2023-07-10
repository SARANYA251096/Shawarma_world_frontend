import {combineReducers} from 'redux';
import{createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllShawarmasReducer } from './reducers/shawarmaReducers';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer,loginUserReducer,getAllUsersReducer } from './reducers/userReducer';
import { getUserOrdersReducer, placeOrderReducer,getAllOrdersReducer } from './reducers/orderReducer';
import {
  addShawarmaReducer,
  getShawarmaByIdReducer,
  editShawarmaReducer,
} from "./reducers/shawarmaReducers";


const finalReducer = combineReducers({
  getAllShawarmasReducer: getAllShawarmasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
   addShawarmaReducer : addShawarmaReducer,
    getShawarmaByIdReducer : getShawarmaByIdReducer,
    editShawarmaReducer : editShawarmaReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    getAllUsersReducer : getAllUsersReducer
});
 const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]

const currentUser=localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
  cartReducer: {
    cartItems:cartItems
  },
  loginUserReducer: {
    currentUser:currentUser
  }
  
}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store