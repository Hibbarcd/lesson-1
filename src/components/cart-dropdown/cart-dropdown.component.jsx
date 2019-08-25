
import React from 'react'
import {connect} from 'react-redux'
import  './cart-dropdown.style.scss'
import { selectCartItems} from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'

import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-item'>

            {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}

        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)
const mapStateToProps = state => ({
    cartItems: selectCartItems(state) 
})

export default connect(mapStateToProps)(CartDropdown)