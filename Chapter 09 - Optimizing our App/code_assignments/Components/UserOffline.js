import React from "react";
const UserOffline = () => {
  return (
    <div className="user-offline-container">
      <h1 className="user-offline-heading">🔴 Offline!</h1>
      <img className="offline-image" src="https://addyosmani.com/assets/bjvR2Sl.png" alt="Offline" />
      <p className="user-offline-message">
        Sorry, it seems that you are currently offline.
      </p>
    </div>
  );
};

export default UserOffline;