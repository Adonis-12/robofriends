import React, { Component } from 'react';
import CardList from '../components/scripts/cardList';
import { robots as initialRobots } from './robots';
import Searchbox from '../components/scripts/Searchbox';
import CreateRobot from '../components/scripts/createRobot';
import '../components/styles/App.css';
import ErrorBoundary from '../components/scripts/ErrorBoundary';
import Scroll from '../components/scripts/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [], 
            searchfield: '',
            first: '',
            last: '',
            email: ''
        };
    }

    componentDidMount(){
        const savedRobots = JSON.parse(localStorage.getItem('robots'));
        if(savedRobots){
            this.setState({ robots: savedRobots });
        } else {
            this.setState({ robots: initialRobots });
        }
    }

    // Update state on input change
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    onfirst = (event) => {
        this.setState({ first: event.target.value });
    };

    onlast = (event) => {
        this.setState({ last: event.target.value });
    };

    onemail = (event) => {
        this.setState({ email: event.target.value });
    };

    // Pushing data to robots array
    push = () => {
        const { first, last, email } = this.state;

        // Validate empty fields
        if (!first || !last || !last) {
            alert('Please fill in all fields!');
            return;
        }

        const user = {
            first_name: first,
            last_name: last,
            email: email
        };

        // Updating robots array and storing in localStorage
        this.setState((prevState) => {
            const updatedRobots = [...prevState.robots, user];
            localStorage.setItem('robots', JSON.stringify(updatedRobots));

            return {
                robots: updatedRobots,
                first: '',  // Reset input fields
                last: '',
                email: ''
            };
        });
    };

    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.push();
        }
    };

    render() {
        // Filtering the robots based on search content
        const { robots, searchfield, first, last, email } = this.state;
        const filteredRobots = robots.filter(robot =>
            robot.first_name.toLowerCase().includes(searchfield.toLowerCase())
        );

        return (
            <div className='tc'>
                <h1 className='f1'>ROBOFRIENDS</h1>
                <CreateRobot
                    first={this.onfirst}
                    last={this.onlast}
                    email={this.onemail}
                    push={this.push}
                    firstValue={first}
                    lastValue={last}
                    emailValue={email}
                    keyPress={this.onKeyPress}
                />
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                <ErrorBoundary>
                <CardList robots={filteredRobots} />
                </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;
