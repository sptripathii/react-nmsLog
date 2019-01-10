import React from 'react';

class Header extends React.Component{
    render(){
        return <h1 style = {{marginLeft: '19em'}}> {this.props.title}</h1>
    }
}

export default Header;