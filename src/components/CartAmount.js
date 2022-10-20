import React, { useState } from 'react'
import { FaMinus,FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
const CartAmount = () => {
    const singleProduct = useSelector((state) => state.ToggleReducer.singleProduct)
    const { stock  } = singleProduct
    const [amount, setAmount] = useState(1)
    const setDecrease = () => {
        amount>1 ? setAmount(amount-1):setAmount(1)

    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount+1):setAmount(stock)

    }
    return (
        <div className='card-button'>
            <div className='amount-toggle'>
                <button onClick={() => setDecrease()}>
                    <FaMinus />
                </button>
                <div className='amount-style'>{amount}</div>
                <button onClick={() => setIncrease()}>
                    <FaPlus />
                </button>

            </div>

        </div>
    )
}

export default CartAmount
