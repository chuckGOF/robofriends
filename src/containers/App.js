import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            rob: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ rob: users }))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        // console.log(event.target.value);
    }

    render() {
        const { rob, searchField } = this.state;
        const filteredRobots = rob.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        return (!rob.length) ?
            <h1>Loading</h1> : 
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}

export default App;