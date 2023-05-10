import createStore from 'react-redux'
import {cartSlice} from './cartSlice'
const store=createStore({
    reducer:
    {
        cart:cartSlice
    }
})