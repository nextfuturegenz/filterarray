import React, { useState } from 'react';
import { useWamiProfile } from './atoms/wami.atom';

const WhatsAppProfile = () => {
  // Placeholder profile data
  const [profile, setProfile] = useWamiProfile();

  const handleEditProfile = () => {
    // Placeholder logic for editing the profile
    console.log('Editing the profile');
  };

  const handleSaveProfile = () => {
    // Placeholder logic for saving the edited profile
    console.log('Saving the profile');
  };

  return (
    <div className="container p-2">
      <div className="row">
        <div className="col">
          <h2>WhatsApp Business Profile</h2>
          <div>
            <label>Business Name:</label>
            <div>{profile.businessName}</div>
          </div>
          <div>
            <label>Phone Number:</label>
            <div>{profile.phoneNumber}</div>
          </div>
          <div>
            <label>Address:</label>
            <div>{profile.address}</div>
          </div>
          <div>
            <label>Business Description:</label>
            <div>{profile.businessDescription}</div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-primary" onClick={handleEditProfile}>
            Edit Profile
          </button>
          <button className="btn btn-success ml-2" onClick={handleSaveProfile}>
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppProfile;
