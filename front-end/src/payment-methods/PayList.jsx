import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Page_Aside_Toggle } from '../Redux/Action'
const PayList = () => {
    const Dispatch = useDispatch()
    return (
        <div className='D-container'>
            <div className="D-heading">
                <div className="dl-head">
                    <div className="icon">
                        <img src="./Assets/svg/payment1.svg" alt="" className='svg-height' />
                    </div>
                    <div className='pl-10'>Payment Method</div>
                </div>
                <button onClick={() => Dispatch(Page_Aside_Toggle(true))} className="dr-head">
                    <img src="./Assets/svg/toggle.svg" alt="" className='svg-height' />
                </button>
            </div>
            <div className='table order-table mt-20 pt-10'>
                <div className='thead'>
                    <div className='tr'>
                        <div className='th'>Order #</div>
                        <div className='th'>Status</div>
                        <div className='th'>Date purchased</div>
                        <div className='th'>Total</div>
                        <div className='th'></div>
                    </div>
                </div>
                <div className='tbody'>
                    <NavLink className='tr'>
                        <div className='td'>21DB3434</div>
                        <div className='td'><code>padding</code></div>
                        <div className='td'>Oct 01, 2022</div>
                        <div className='td'>$203.00</div>
                        <div className='td'>→</div>
                    </NavLink>
                    <NavLink className='tr'>
                        <div className='td'>21DB3434</div>
                        <div className='td'><code>padding</code></div>
                        <div className='td'>Oct 01, 2022</div>
                        <div className='td'>$203.00</div>
                        <div className='td'>→</div>
                    </NavLink>
                    <NavLink className='tr'>
                        <div className='td'>21DB3434</div>
                        <div className='td'><code className='cancel'>cancel</code></div>
                        <div className='td'>Oct 01, 2022</div>
                        <div className='td'>$203.00</div>
                        <div className='td'>→</div>
                    </NavLink>
                    <NavLink className='tr'>
                        <div className='td'>21DB3434</div>
                        <div className='td'><code className='cancel'>cancel</code></div>
                        <div className='td'>Oct 01, 2022</div>
                        <div className='td'>$203.00</div>
                        <div className='td'>→</div>
                    </NavLink>
                    <NavLink className='tr'>
                        <div className='td'>21DB3434</div>
                        <div className='td'><code className='delivered'>delivered</code></div>
                        <div className='td'>Oct 01, 2022</div>
                        <div className='td'>$203.00</div>
                        <div className='td'>→</div>
                    </NavLink>
                    <NavLink className='tr'>
                        <div className='td'>21DB3434</div>
                        <div className='td'><code className='delivered'>delivered</code></div>
                        <div className='td'>Oct 01, 2022</div>
                        <div className='td'>$203.00</div>
                        <div className='td'>→</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default PayList
