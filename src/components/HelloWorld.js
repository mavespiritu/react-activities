import React from 'react';

class HelloWorld extends React.Component{
    render()
    {
        let isAnonymous = true;
        
        const items = ['rice', 'chicken'];
        return(
            <div>
                <h1>Hello World</h1>
                <p>Welcome to React!</p>
                <p>{this.props.myName}</p>
                {items.map(item => {
                    return <li>{item}</li>
                })}
            </div>
        );
    }
}

export default HelloWorld;