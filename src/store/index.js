import { createStore, combineReducers } from "redux";
import { productReducer } from "./reducers/product.reducer";

const RootReducer = combineReducers({
    productStore: productReducer 
})
export const store = createStore(RootReducer)