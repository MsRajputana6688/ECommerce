import React, { useEffect, useState } from 'react'
import LogIn from './login'
import LogUp from './logup'
import UserData from './UserData'
import './style.css'

const AutherInfo = ({ setFromState }) => {
    window.addEventListener('click', (event) => {
        if (event.target.className === 'userContant') {
            setFromState(false)
        }
    })
    const [Auther, SetAuther] = useState(true)
    const [showData, SetShowData] = useState(true);
    useEffect(() => {
        const userdata = JSON.parse(localStorage.getItem('userLogin'));
        if (userdata) {
            SetShowData(false)
        }
    }, [])
    return (
        showData ? <div className='userContant'>
            <div className='UserData'>
                <button className="close" type="button" onClick={() => setFromState(false)}>X</button>
                {
                    Auther ? <LogIn SetAuther={SetAuther} /> : <LogUp SetAuther={SetAuther} />
                }
            </div>
        </div>
            : <div className="userContant">
                <div className="UserData">
                    <UserData setFromState={setFromState} />
                </div>
            </div>
    )
}

export default AutherInfo