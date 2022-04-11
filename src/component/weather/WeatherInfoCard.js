import React, { useEffect } from 'react'

const WeatherInfoCard = ({ tempinfo }) => {
    const [weathericon, setweathericon] = React.useState("");

    //now destructuring the temp info object
    const { temp, pressure, humidity, weathermood, speed, name, country, sunset } = tempinfo;

    //converting sunset in time 
    let sec = sunset;
    let milisec = sec * 1000;
    const date = new Date(milisec)
    const timestr = `${date.getHours()}:${date.getMinutes()}`;//`template literals ${  }`


    //changing weather icon
    //for changing effects in individual page we usr eseEffect
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setweathericon("wi-day-cloudy")
                    break;
                case "Haze":
                    setweathericon("wi-day-haze")
                    break;
                case "Smoke":
                    setweathericon("wi-day-fog")
                    break;
                case "Mist":
                    setweathericon("wi-dust")
                    break;
                case "Clear":
                    setweathericon("wi-day-sunny")
                    break;

                default:
                    setweathericon("wi-day-sunny")
                    break;
            }
        }

    }, [weathermood]);
    ///dependency: if the weathermood change icon will change
    return (
        <>


            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weathericon} text-danger`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span className="iotemp">{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">
                            {name},{country}
                        </div>
                    </div>
                    <div className="date"> {new Date().toLocaleString()} </div>
                </div>

               

                {/* our 4column section  */}
                <div className="extra-temp">
                    
                        <div className="two">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                Sunset<br />
                                {timestr}
                            </p>
                        </div>

                        <div className="two">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                humidity<br />
                                {humidity}
                            </p>
                        </div>
                        <div className="two">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                pressure <br />
                                {pressure}
                            </p>
                        </div>
                        <div className="two">
                            
                                <i className={"wi wi-strong-wind"}></i>
                            
                            <p className="extra-info-leftside">
                                wind speed <br/>
                                {speed}
                            </p>
                        </div>
                    

                    
                </div>
            </article>

        </>
    )
}

export default WeatherInfoCard
