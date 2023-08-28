import React from "react";
import "../../css/customerstyles.css";

export const PersonalInfo = () => {
  return (
    <div className="setting-personal-info">
      <div className="upload-photo-flex">
        <h6>Your Profile Picture</h6>
        <div className="setting-upload-photo">
          <p>Upload your Photo</p>
          <img src="../../images/material-symbols_add-photo-alternate-outline.png" alt="" />

        </div>
      </div>
    </div>
  );
};
