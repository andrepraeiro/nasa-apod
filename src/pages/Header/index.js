import React, { Component } from 'react'

import './header.css'
import { ReactComponent as Logo } from '../../assets/NASA_logo.svg'

export default class Header extends Component {
    render() {
        return (
            <header id="main-header">
                <div className="header-content">
                    <div className="header-title">
                        <Logo id="logo" />
                        <h2>NASA - Astronomy Image of the Day</h2>
                    </div>
                </div>
            </header>
        )
    }
}
