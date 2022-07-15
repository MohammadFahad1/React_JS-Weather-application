import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'

class Weather extends Component {
    render() {
        return (
            <>
                <Search />
                <Result />
            </>
        )
    }
}

export default Weather