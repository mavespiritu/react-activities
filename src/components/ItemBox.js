import React, { Component } from 'react'

export class ItemBox extends Component {
    addToCart = () => {
        this.props.addToCart(this.props.item);
    }

    removeToCart = () => {
        this.props.removeToCart(this.props.item);
    }

    editItem = () => {
        this.props.editItem(this.props.item);
    }

    render() {
        let {id, name, category, image, price} = this.props.item;
        return (
            <div className="item">
                <img src={image} alt={name} />
                <div>
                    <strong>{name}</strong><br/>
                    <small>Php {price}</small><br/>
                    <button onClick={this.removeToCart}>-</button>
                    <button onClick={this.addToCart}>+</button><br/>
                    <button onClick={this.editItem}>Edit</button>   
                </div>
            </div>
        )
    }
}

export default ItemBox
