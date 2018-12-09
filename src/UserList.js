import React from 'react';

const UserList = (props) => {
	return (
    	<div className='user-list-container'>
          <button
      		onClick={() => props.toggleShowGames()}
      	  >Show/Hide Games</button>
          <ol className='user-list'>
           {props.users.map((user) =>{
    		  return <li key={`${user.userName}${user.firstName}${user.lastName}`}>{user.userName}<span style={{display: props.shouldShowGames}}className='user-games'>{user.gamesPlayed}</span></li>
    		 })}
          </ol>
        </div>
    );
}

export default UserList