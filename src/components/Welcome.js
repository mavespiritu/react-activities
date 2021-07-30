import React, { Component } from 'react'

export class Welcome extends Component {
    state = {
        firstname: '',
        lastname: '',
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <form>
                    First Name: <input type='text' name='firstname' onChange={this.inputChangeHandler} value={this.state.firstname} /><br />
                    Last Name: <input type='text' name='lastname' onChange={this.inputChangeHandler} value={this.state.lastname} /><br />
                    <button>Reset</button>
                    <p><b>Welcome,</b> {this.state.firstname} {this.state.lastname}!</p>
                </form>
            </div>
        )
    }
}

export default Welcome
