import { combineReducers } from 'redux'
import { persistReducer} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer.js'
import cartReducer from './cart/cart.reducer'

const persistConfig = {
    key: 'root',
    storage,
    //whiteList means only cart is persisted, not the user since that is handled by firebase
    whiteList: ['cart']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
})


export default persistReducer(persistConfig, rootReducer)
