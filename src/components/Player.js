import React from 'react'

class Player extends React.Component {
    render()
    {
        return(
        <div>
            <p>{this.props.name}</p>
            <p>{this.props.number}</p>
        </div>
        );
    }
}

export default Player;
