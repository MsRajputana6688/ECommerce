import React, { useState } from 'react'
import MSG from '../MSG';
// import "../style.css"
import LogInData from './form';
const LogIn = ({ SetAuther }) => {
    const [Confirm, SetConfirm] = useState(false)
    const [msg, setMsg] = useState(false)

    return (
        Confirm ? <MSG msg={msg} /> : <LogInData SetAuther={SetAuther} SetConfirm={SetConfirm} setMsg={setMsg} />
    )
}

export default LogIn