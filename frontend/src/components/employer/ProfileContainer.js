import React from 'react';
import './ProfileContainer.css';

//TO DO:
// Change the handlers content to render the respective components

//This component is a profile container.
//It contains a Profile picture, a username and a edit profile button.

const  ProfileContainer=(props)=> {
    return (
    <div className= "profileContainer">
    <div className = "profilePic" onClick={switchProfilePicHandler}/>
    <p className= "username" onClick = {switchUsernameHandler}>@{props.username}</p>
    <button className="btn btn-outline-secondary" onClick = {editProfileHandler}>Edit Profile</button>
    </div>
    )
};

//allows user to directly edit their username while staying here.
function switchUsernameHandler(){
    console.log("Username was clicked.");
    return 0;
}

//opens their profile pic editor (small component) 
function switchProfilePicHandler(){
    console.log("Profile pic was clicked.");
    return 0;
}

//opens their detailed profile editor component
function editProfileHandler(){
    console.log("Edit profile button was cliked.");
    return 0;
}


export default ProfileContainer;
