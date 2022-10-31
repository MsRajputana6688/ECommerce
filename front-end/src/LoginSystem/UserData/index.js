import React, { useEffect, useState } from 'react'

const UserData = ({ setFromState }) => {
    const [city, SetCity] = useState(null)
    const [Data, SetData] = useState({})
    useEffect(() => {

    }, [])

    useEffect(() => {
        const userdata = JSON.parse(localStorage.getItem('userLogin'));
        SetData(userdata)

        const WeatherInfo = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${userdata.city}&units=metric&appid=305d6efb3c15fae1f56826dc1e9f43f5`
            const res = await fetch(url)
            const resJson = await res.json()
            SetCity(resJson)
            // console.log(resJson);
            // console.log(resJson.weather[0].description);
        }
        WeatherInfo()
    }, [])
    const Logout = () => {
        localStorage.removeItem('userLogin');
        setFromState(false)
    }
    return (
        <div className='useInterSide'>
            {
                !city ? 'Weather Data Not Found'
                    : <div className="cityCart">
                        <div className="weather_info">
                            <div className="temp">{city.main.temp}<sup>o</sup>C</div>
                            <div className="place">{city.name}, {city.sys.country}</div>
                        </div>
                        <div className="weather_icon">
                            <div className="wea-icon">
                                <img src={`./Assets/weather/${city.weather[0].id}${city.weather[0].icon}.png`} alt="" />
                            </div>
                            <div className="dec">
                                {city.weather[0].description}
                            </div>
                        </div>
                    </div>
            }
            <div className="userCart">
                <div className="user">
                    @{Data.user}
                </div>
                <div className="cont">
                    - {Data.email}
                </div>
            </div>
            <button type='button' id='submit' onClick={Logout}>logout</button>
        </div >
    )
}

export default UserData
