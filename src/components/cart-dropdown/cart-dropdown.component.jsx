import React from 'react'
import  './cart-dropdown.style.scss'

import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-item' />
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)
export default CartDropdown