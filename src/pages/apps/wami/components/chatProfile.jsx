import React from 'react';

const ChatProfile = ({ user }) => {
  return (
    <div className="profile-section shadow rounded mt-2 p-3" style={{ backgroundColor: 'white', marginRight: '10px' }}>
      <div className="d-flex align-items-center">
        <div className="profile-image mr-3">
          <img src={user.profileImage} alt={`${user.name}'s profile`} className="rounded-circle" width="50" height="50" />
        </div>
        <div className="profile-info">
          <h5 className="mb-1">{user.name}</h5>
          <p className="mb-1">Email: {user.email}</p>
          <p className="mb-0">Phone: {user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatProfile;
