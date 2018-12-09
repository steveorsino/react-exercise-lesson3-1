import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './AddUserForm';
import UserList from './UserList'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
  	users: [
      {
      	userName: 'user1',
        firstName: 'aaaa',
        lastName: 'AAA',
        gamesPlayed: 0
      },
      {
      	userName: 'user2',
        firstName: 'bbbb',
        lastName: 'BBB',
        gamesPlayed: 0
      }
    ],
    displayError: 'none',
    showGames: 'inline-block'
  }

  addUserHandler = (newUser) => {
    const alreadyHasUser = this.state.users.filter(user => user.userName === newUser.userName);
    console.log(alreadyHasUser);
    if (alreadyHasUser.length === 0 ) {
      this.setState((prevState)=>{
          return {users: [...prevState.users, newUser]}
      });
    } else {
      this.setState({displayError: 'block'});
    }
  };

  showGamesHandler = () => {
  	this.setState(prevState => {
      let show = prevState.showGames === 'inline-block' ? 'none' : 'inline-block'
    	return {showGames: show}
    })
  }

  disabledButtonHandler = (userNamelength) => {
    if (userNamelength)
  	  this.setState({disabled: false})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<AddUserForm 
    		users={this.state.users} 
			updateUsers={this.addUserHandler}
			isDisabled={this.state.disabled} 
			toggleDisabled={this.disabledButtonHandler}
			shouldDisplayError={this.state.displayError}
		/>
		<UserList 
			users={this.state.users} 
			toggleShowGames={this.showGamesHandler}
			shouldShowGames={this.state.showGames}
			/>
      </div>
    );
  }
}

export default App;
