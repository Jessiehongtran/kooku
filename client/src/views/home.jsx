import React from 'react';
import '../styles/home.scss'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
        <div className="home">
            <h1>Kooku</h1>
            <h2>Software for Inventory Management</h2>
        </div>
        )
    }
}