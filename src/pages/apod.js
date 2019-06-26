import React, { Component } from 'react'
import api from '../services/api'

export default class Apod extends Component {
    state = {
        copyright: ''
        , apod: []
    }

    async componentDidMount() {
        const response = await api.get('apod?api_key=tD3fERSCXQRjRHfmAwtCN0E658aEj88YNWWOaq41')
        //const response = await api.get('apod/?api_key=DEMO_KEY')
        console.log(response)
        this.setState({ copyright: response.data.copyright, apod: response.data })
        console.log(this.state)
    }

    render() {
        return (

            <div>
                {this.state.apod.copyright}
                {this.state.apod.explanation}
            </div>)
    }
}

