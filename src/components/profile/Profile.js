import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <header className="Profile-header">
          <img src={"http://via.placeholder.com/350x150"} className="Profile-logo" alt="logo" />
          <h1 className="Profile-title">Profile</h1>
        </header>
        <p className="Profile-intro">
          Profile
        </p>
      </div>
    );
  }
}

export default Profile;
