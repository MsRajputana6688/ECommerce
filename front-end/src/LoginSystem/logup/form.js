import React, { useState } from 'react'
import axios from 'axios'
import "../style.css"

const LogUpData = ({ SetAuther, SetConfirm, setMsg }) => {
    const [UserData, SetUserData] = useState({
        user: '',
        pwd: '',
        email: '',
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
        email: '',
        city: '',
        pwd: ''
    })
    const submitData = () => {
        const { city, email, pwd, user } = UserData
        if (!email || !city || !user || !pwd) {
            if (!user) {
                SetRequireInfo({
                    ...RequireInfo,
                    user: 'Username Required *'
                })
            }
            if (!city) {
                SetRequireInfo({
                    ...RequireInfo,
                    city: 'city Name Required *',
                })
            }
            if (!email) {
                SetRequireInfo({
                    ...RequireInfo,
                    email: 'Email Id Required *',
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
            axios.post("http://localhost/logup", UserData)
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
                    Singup with email & password
                </div>

                <div className="form-fil">
                    <label htmlFor="user">Username</label>
                    <input type="text" name="user" id="user" value={UserData.user} onChange={getInput} placeholder='example : MsRajputana' />
                    <span>{UserData.user ? '' : RequireInfo.user}</span>
                </div>
                <div className="form-fil">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" value={UserData.city} onChange={getInput} placeholder='example : Jalor' />
                    <span>{UserData.city ? '' : RequireInfo.city}</span>
                </div>
                <div className="form-fil">
                    <label htmlFor="email">Email or Phone Number</label>
                    <input type="text" name="email" id="email" value={UserData.email} onChange={getInput} placeholder='example@gmail.com' />
                    <span>{UserData.email ? '' : RequireInfo.email}</span>
                </div>
                <div className="form-fil">
                    <label htmlFor="pwd">Password</label>
                    <input type="text" name="pwd" id="pwd" value={UserData.pwd} onChange={getInput} placeholder='* * * * * *' />
                    <span>{UserData.pwd ? '' : RequireInfo.pwd}</span>
                </div>

                <div className="form-fil">
                    <button type='button' id='submit' onClick={submitData}>Sign Up</button>
                </div>
                <div className="form-logup">
                    Already have a account? <button type='button' onClick={() => SetAuther(true)}>Login</button>
                </div>
            </div>
            <div className="form-footer">
                Forgot your password? <a href="#">Reset Password</a>
            </div>
        </form>
    )
}

export default LogUpData