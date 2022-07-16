import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import axios from 'axios'

class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: "",
            lon: "",
            weatherData: null,
            city: "",
            isSerched: false,
            recent: [],
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
            isSearched: true,
        })
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    this.setState({
                        lat: res.coords.latitude,
                        lon: res.coords.longitude,
                    });
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.coords.latitude}&lon=${res.coords.longitude}&appid=0911288136dc9dc17b1a4a0cacb63e8c`)
                        .then((result) => {
                            let setTheStates = () => {
                                this.setState({
                                    city: result.data.name,
                                    weatherData: result.data,
                                });
                            }
                            setTheStates();
                            this.addDataToRecent()
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                    // this.searchHandler()
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }

    addDataToRecent = () => {
        let recent = this.state.recent;
        recent.push({
            lat: this.state.lat,
            lon: this.state.lon,
            city: this.state.city,
        });
        this.setState(recent);
    }

    searchHandler = () => {
        this.setState({
            isSearched: true,
        });
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=0911288136dc9dc17b1a4a0cacb63e8c`)
            .then((result) => {
                this.setState({
                    city: result.data.name,
                    weatherData: result.data,
                });
                this.addDataToRecent();
            })
            .catch((error) => {
                console.log(error)
            });
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
                    search={this.searchHandler}
                />
                <Result
                    isSerched={this.state.isSerched}
                    weatherData={this.state.weatherData}
                    recent={this.state.recent}
                />
            </>
        )
    }
}

export default Weather