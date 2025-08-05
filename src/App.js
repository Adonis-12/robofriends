import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './components/scripts/cardList';
import Searchbox from './components/scripts/Searchbox';
import CreateRobot from './components/scripts/createRobot';
import './components/styles/App.css';
import ErrorBoundary from './components/scripts/ErrorBoundary';
// import Scroll from './components/scripts/Scroll';
import { addEmail, addFirstName, addLastName, addRobot, changeSearchField } from './redux/actions';

//GETTING STATE
const mapStateToProps = state => {
    return {
        searchField : state.searchField,
        robots: state.robots,
        // firstName: state.firstName,
        // lastName: state.lastName,
        // email: state.email
    }
}

// DISPATCHING VALUES TO THE STORE 
const mapDispatchProps = (dispatch) => {
   return {
        onSearchChange: (event) => dispatch(changeSearchField(event.target.value)),
        // onfirst: (event) => dispatch(addFirstName(event.target.value)),
        // onlast: (event) => dispatch(addLastName(event.target.value)),
        // onemail: (event) => dispatch(addEmail(event.target.value)),
        // onAddRobot: (robot) => dispatch(addRobot(robot))
    }
}

class App extends Component {
   
    // Pushing data to robots array
    // push = () => {
    //     const { firstName, lastName, email } = this.props;

    //     // Validate empty fields
    //     if (!firstName || !lastName || !email) {
    //         alert('Please fill in all fields!');
    //         return;
    //     }

    //     const user = {
    //         first_name: firstName,
    //         last_name: lastName,
    //         email: email
    //     };
        
    //     this.props.onAddRobot(user);
        
    //     };

    // //ADDING EVENT LISTENNER
    // onKeyPress = (event) => {
    //     if (event.key === 'Enter') {
    //         this.push();
    //     }
    // };

    render() {
        // Filtering the robots based on search content
        const {searchField , 
                onSearchChange ,
                // onfirst,
                // onlast,
                // onemail, 
                robots , 
                // firstName, 
                // lastName, 
                // email
                } = this.props;

        const filteredRobots = robots.filter(robot =>
            robot.first_name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className='tc'>
                <h1 className='f1 white'>ROBOFRIENDS</h1>
                {/* <CreateRobot
                    first={onfirst}
                    last={onlast}
                    email={onemail}
                    push={this.push}
                    firstValue={firstName}
                    lastValue={lastName}
                    emailValue={email}
                    keyPress={this.onKeyPress}
                /> */}  
                {/* this feature allowed you to make your own profile directly from UI*/}
                <Searchbox searchChange={onSearchChange} />
                <ErrorBoundary>
                <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchProps)(App);
