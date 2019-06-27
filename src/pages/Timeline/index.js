import React, { Component } from 'react'
import api from '../../services/api'
import dateUtils from '../dateUtils'

import './timeline.css'

export default class Timeline extends Component {
    state = {
        data: []
    }

    async componentDidMount() {

        const startDate = new Date()
        const endDate = new Date()
        endDate.setDate(endDate.getDate() - 10)
        const dateList = dateUtils.getDateArray(startDate, endDate)

        this.setState({
            data:
                await Promise.all(dateList.map(async date => {
                    const url = `apod?api_key=tD3fERSCXQRjRHfmAwtCN0E658aEj88YNWWOaq41&date=${dateUtils.formatDate(date)}`
                    const response = await api.get(url)
                    return response.data
                }))
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <div className="timeline">
                {this.state.data.map(item => (
                    <article key={item.date} className="timeline-item">
                        <div className="timeline-item-title">{item.title}</div>
                        <div className="timeline-item-author-date">{item.copyright}. {item.date}</div>
                        <div className="timeline-item-description">{item.explanation}</div>
                        <div className="timeline-item-image">
                            <img src={item.url} alt={item.title} />
                        </div>
                    </article>
                )
                )}
            </div>
        )
    }
}
