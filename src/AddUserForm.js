import React from 'react';



class AddUserForm extends React.Component {
 state = {
 	newUser : {
      userName: '',
      firstName: '',
      lastName: '',
      gamesPlayed: 0
    },
    disabled: true
 }


updateUserName = (value) => {
  this.setState( prevState => {
  	return {newUser: {
    	userName: value,
        firstName: prevState.newUser.firstName,
        lastName: prevState.newUser.lastName,
        gamesPlayed: 0
    },
    disabled: value.length === 0
   }
  })
}
updateFirstName = (value) => {
  this.setState( prevState => {
  	return {newUser: {
    	userName: prevState.newUser.userName,
        firstName: value,
        lastName: prevState.newUser.lastName,
        gamesPlayed: 0
    }}
  })
}
updateLastName = (value) => {
  this.setState( prevState => {
  	return {newUser: {
    	userName: prevState.newUser.userName,
        firstName: prevState.newUser.firstName,
        lastName: value,
        gamesPlayed: 0
    }}
  })
}



  render() {
	return (
    	<div className='add-user-form'>
      		<h2>Add a User</h2>
      		<input 
      			type='text'
      			placeholder='First Name'
      			value={this.state.newUser.firstName}
      			onChange={(event) => {this.updateFirstName(event.target.value)}}
      		/>
			<input 
      			type='text'
      			placeholder='Last Name'
      			value={this.state.newUser.lastName}
      			onChange={(event) => {this.updateLastName(event.target.value)}}
      		/>
			<input 
      			type='text'
      			placeholder='User Name'
      			value={this.state.newUser.userName}
      			onChange={(event) => {this.updateUserName(event.target.value)}}
				required
      		/>
			<button
				disabled={this.state.disabled}
				onClick={() => this.props.updateUsers(this.state.newUser)}
			>Add User</button>
			<h4
				style={{display: this.props.shouldDisplayError}}
			>This username already exists</h4>
      	</div>
    );
	}
}

export default AddUserForm;