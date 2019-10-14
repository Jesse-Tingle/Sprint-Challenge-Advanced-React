import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="player">
                <h2>Player Name: {this.props.person.name}</h2>
                <p>Country: {this.props.person.country}</p>
                <p>Number of Searches: {this.props.person.searches}</p>
            </div>
        )
    }
}
