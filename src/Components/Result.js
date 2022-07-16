import React from 'react'
import Loader from './Loader';

export default function Result(props) {
    const { weatherData: data } = props;
    function kToC(k) {
        return (k - 273.15).toFixed(2);
    }

    function getTheDate(stamp) {
        const date = new Date(stamp * 1000);
        return date.toLocaleTimeString();
    }
    let showOnPage;
    if (data === null) {
        if (props.isSearched === true) {
            showOnPage = <>
                <Loader />
            </>
        } else {
            <></>
        }
    } else {
        showOnPage = <div className="container-fluid weather-info mt-4">
            <div className='row'>
                <div className='col-md-2'>
                    <ul>
                        {
                            props.recent.map((data, id) => {
                                return <li key={data.id}><button>{data.city}</button></li>
                            })
                        }
                    </ul>
                </div>
                <div className='col-md-10' style={{ paddingRight: "50px" }}>
                    <h2><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> {data.name} ({kToC(data.main.temp)}° C) {data.weather[0].description}</h2>
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Head</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center" width="30%">City Name</td>
                                <td width="70%">{data.name}</td>
                            </tr>
                            <tr>
                                <td className="text-center" width="30%">Feels Like</td>
                                <td width="70%">{data.weather[0].description}</td>
                            </tr>
                            <tr>
                                <td className="text-center" width="30%">Min Temp</td>
                                <td width="70%">{kToC(data.main.temp_min)}° C</td>
                            </tr>
                            <tr>
                                <td className="text-center" width="30%">Max Temp</td>
                                <td width="70%">{kToC(data.main.temp_max)}° C</td>
                            </tr>
                            <tr>
                                <td className="text-center" width="30%">Country</td>
                                <td width="70%">{data.sys.country}</td>
                            </tr>
                            <tr>
                                <td className="text-center" width="30%">Sunrise</td>
                                <td width="70%">{getTheDate(data.sys.sunrise)}</td>
                            </tr>
                            <tr>
                                <td className="text-center" width="30%">Sunset</td>
                                <td width="70%">{getTheDate(data.sys.sunset)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
    return (
        <>
            {showOnPage}
        </>
    )
}
