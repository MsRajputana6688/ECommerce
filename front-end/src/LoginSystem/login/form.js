import React, { useState } from 'react'
import axios from 'axios'
import "../style.css"

const LogInData = ({ SetAuther, SetConfirm, setMsg }) => {
    const [UserData, SetUserData] = useState({
        user: '',
        pwd: '',
    });
    const getInput = (event) => {
        const { name, value } = event.target
        SetUserData({
            ...UserData,
            [name]: value
        })
    }
    const [RequireInfo, SetRequireInfo] = useState({
        user: '',
        pwd: ''
    })
    const submitData = () => {
        const { pwd, user } = UserData
        if (!user || !pwd) {
            if (!user) {
                SetRequireInfo({
                    ...RequireInfo,
                    user: 'Username Required *'
                })
            }
            if (!pwd) {
                SetRequireInfo({
                    ...RequireInfo,
                    pwd: 'Password Required *',
                })
            }
        }
        else {
            axios.post("http://localhost/login", UserData)
                .then((val) => {
                    if (val.data.msg) {
                        SetConfirm(true)
                        setMsg(val.data.msg)
                    }
                    if (val.data.logc) {
                        localStorage.setItem('userLogin', JSON.stringify(val.data.userinfo))
                    }
                })
        }
    }
    return (
        <form>
            <div className="form-fild">
                <div className="form-heading">
                    Welcome To Ecommerce
                </div>
                <div className="form-tel">
                    Log in with email & password
                </div>

                <div className="form-fil">
                    <label htmlFor="user">Username</label>
                    <input type="text" name="user" id="user" value={UserData.user} onChange={getInput} placeholder='example : MsRajputana' />
                    <span>{UserData.user ? '' : RequireInfo.user}</span>
                </div>

                <div className="form-fil">
                    <label htmlFor="pwd">Password</label>
                    <input type="text" name="pwd" id="pwd" value={UserData.pwd} onChange={getInput} placeholder='* * * * * *' />
                    <span>{UserData.pwd ? '' : RequireInfo.pwd}</span>
                </div>

                <div className="form-fil">
                    <button type='button' id='submit' onClick={submitData}>Login</button>
                </div>
                <div className="form-logup">
                    create an account? <button type='button' onClick={() => SetAuther(false)}>Sign Up</button>
                </div>
            </div>
            <div className="form-footer">
                Forgot your username? <a href="#">click</a>
            </div>
        </form>
    )
}

export default LogInData