import React from 'react';
import './ProfileContainer.css';

//TO DO:
// Change the handlers content to render the respective components

//This component is a profile container.
//It contains a Profile picture, a username and a edit profile button.

const  ProfileContainer=(props)=> {
    return (
    <div className= "profileContainer">
    <img className = "profilePic"/>
    <p className= "username">@{props.username}</p>
    <button className="btn btn-outline-secondary" onClick = {editProfileHandler}>{props.buttonText}</button>

    </div>
    )
};


//opens their detailed profile editor component
function editProfileHandler(){
    console.log("Edit profile button was clicked.");
    return 0;
}


export default ProfileContainer;
