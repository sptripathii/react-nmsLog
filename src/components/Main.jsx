import React from 'react';
import Header from './Header.jsx';
import Grid from './Grid.jsx';
import Dashboard from './Dashboard.jsx';

class MainComponent extends React.Component{
    render(){
        return <div>
                    <Header title={'NMS - Monitoring'}/>
                    <Dashboard/>
                    <Grid/>
                </div>;
    }
}

export default MainComponent;