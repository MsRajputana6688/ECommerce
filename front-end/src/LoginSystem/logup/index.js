import React, { useState } from 'react'
import MSG from '../MSG';
// import "../style.css"
import LogUpData from './form';
const LogUp = ({ SetAuther }) => {
    const [Confirm, SetConfirm] = useState(false)
    const [msg, setMsg] = useState(false)

    return (
        Confirm ? <MSG msg={msg} /> : <LogUpData SetAuther={SetAuther} SetConfirm={SetConfirm} setMsg={setMsg} />
    )
}

export default LogUp