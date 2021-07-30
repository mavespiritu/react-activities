import React, { Component } from 'react'

export class Pokemon extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.pokemon.name}</td>
                <td>{this.props.pokemon.type}</td>
                <td><img src={this.props.pokemon.image} /></td>
            </tr>
        )
    }
}

export default Pokemon
