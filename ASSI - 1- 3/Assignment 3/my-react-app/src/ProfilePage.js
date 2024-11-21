// src/ProfilePage.js
import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import './ProfilePage.css';
import myProfileImage from "./images/Avinash.jpeg"

const ProfilePage = () => {
    const user = {
        profilePicture: myProfileImage,
        name: 'Avinash Nalawade',
        email: 'avinashnalawade0007@example.com',
        bio: 'MCA student at YMIM Karad'
    };

    return (
        <div className="profile-page">
            <ProfilePicture url={user.profilePicture} />
            <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
        </div>
    );
};

export default ProfilePage;