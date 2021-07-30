import React, { Component } from 'react';

export class AddItemForm extends Component {
    state = {
        name: this.props.item.name,
        category: this.props.item.category,
        price: this.props.item.price,
        image: this.props.item.image,
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    addNewitem = (e) => {
        let newItem = {
            name: this.state.name,
            category: this.state.category,
            price: this.state.price,
            image: this.state.image,
        }

        this.props.addItem(newItem);
    }

    render() {

        return (
            <div>
                    Name: <input name="name" value={this.state.name} onChange={this.inputChangeHandler} /><br />
                    Category: <input name="category" value={this.state.category} onChange={this.inputChangeHandler} /><br />
                    Price: <input name="price" value={this.state.price} onChange={this.inputChangeHandler} /><br />
                    Image: <input name="image" value={this.state.image} onChange={this.inputChangeHandler} /><br />
                    <button onClick={this.addNewitem}>Submit</button>
            </div>
        )
    }
}

export default AddItemForm
