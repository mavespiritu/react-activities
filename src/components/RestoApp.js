import React, { Component } from 'react';
import AddItemForm from './AddItemForm';
import ItemBox from './ItemBox';

export class RestoApp extends Component {
    state = {
        item : {
            name: '',
            price: 0,
            category: '',
            status: 'active',
            image: ''
        },
        items : [
         {
             id: 1,
             name: "Burger",
             price: 50,
             category: "Food",
             status: 'active',
             image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
         },
         {
             id: 2,
             name: "Pizza",
             price: 100,
             category: "Food",
             status: 'active',
             image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
         },
         {
             id: 3,
             name: "Fries",
             price: 25,
             category: "Food",
             status: 'active',
             image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
         },
         {
             id: 4,
             name: "Coffee",
             price: 35,
             category: "Drink",
             status: 'active',
             image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
         },
         {
             id: 5,
             name: "Iced Tea",
             price: 45,
             category: "Drink",
             status: 'active',
             image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
         },
         {
             id: 6,
             name: "Hot Tea",
             price: 45,
             category: "Drink",
             status: 'active',
             image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
         },
       ],
       filter: 'All',
       cart: []
     }
    
    changeDisplay = (category) => {
        this.setState({
            filter: category
        });
    }

    addItem = (newItem) => {
        newItem.id = this.state.items.length + 1;
        this.setState({
            items: [...this.state.items, newItem]
        })
    }

    addToCart = (item) => {
        if(this.state.cart.filter(crt => crt.id == item.id).length > 0)
        {
            let cart = [...this.state.cart];
            cart.filter(crt => crt.id == item.id)[0].quantity = cart.filter(crt => crt.id == item.id)[0].quantity + 1;

            this.setState({
                cart: cart
            })
        }else{
            item.quantity = 1;
            this.setState({
                cart: [...this.state.cart, item]
            })
        }
    }

    removeToCart = (item) => {
        if(this.state.cart.filter(crt => crt.id == item.id).length > 0)
        {
            let cart = [...this.state.cart];
            if(cart.filter(crt => crt.id == item.id)[0].quantity == 1)
            {
                let selectedCart = cart.map(item => {return item.id}).indexOf(item.id);
                cart.splice(selectedCart, 1);   

            }else{
                cart.filter(crt => crt.id == item.id)[0].quantity = cart.filter(crt => crt.id == item.id)[0].quantity - 1;
            }

            this.setState({
                cart: cart
            })
        }
    }

    editItem = (item) => {
        this.setState({
            item : item,
        });

        console.log(this.state.item);
    }

    render() {
        
        let items = this.state.filter === 'All' ? this.state.items : this.state.items.filter(item => item.category == this.state.filter)
        let itemsDisplay = items.map(item => <ItemBox key={item.id} item={item} addToCart={this.addToCart} removeToCart={this.removeToCart} editItem={this.editItem} />)
        let cartDisplay = this.state.cart.map(crt => {
            return <div key={crt.id}>{crt.name} x {crt.quantity} = {crt.price * crt.quantity}</div>
        })
        
        return (
            <div>
                <AddItemForm addItem={this.addItem} item={this.state.item} />
                <div>
                    <button onClick={() => this.changeDisplay('All')}>All</button>
                    <button onClick={() => this.changeDisplay('Food')}>Food</button>
                    <button onClick={() => this.changeDisplay('Drink')}>Drink</button>
                </div>
                <div className="container">
                    {itemsDisplay}
                </div>
                <h3>Cart</h3>
                {cartDisplay}
            </div>
        )
    }
}

export default RestoApp
