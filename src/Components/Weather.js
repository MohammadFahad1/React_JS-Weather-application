import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'

class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: "",
            lon: "",
            weatherData: null,
            city: "",
        }
    }

    changeHandler = (e) => {
        const name = e.target.name;
        if (name === "city") {
            this.setState({
                city: e.target.value,
            });
        } else if (name === "lat") {
            this.setState({
                lat: e.target.value,
            });
        } else if (name === "lon") {
            this.setState({
                lon: e.target.value,
            });
        }
    }

    locationHandler = () => {
        this.setState({
            lat: "",
            lon: "",
            weatherData: null,
            city: "",
        });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    this.setState({
                        lat: res.coords.latitude,
                        lon: res.coords.longitude
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }

    render() {
        return (
            <>
                <Search
                    lat={this.state.lat}
                    lon={this.state.lon}
                    city={this.state.city}
                    weatherData={this.state.weatherData}
                    change={this.changeHandler}
                    getLocation={this.locationHandler}
                />
                <Result />
            </>
        )
    }
}

export default Weather