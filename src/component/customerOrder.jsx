import React from "react";

export const CustomerOrder = ({name,precentage,img,order}) => {
  
  return (
    <div className="customer-body">
      <div className="customer-data">
        <div className="customer-data-name">
          <img
            src={img}
            alt="user-img"
          />
          <div className="customer-name">
            <h6>{name}</h6>
            <p>{order}</p>
          </div>
        </div>
        <div className="order-precentage">
          <p>{precentage}%</p>
          <div className="precentage-container">
            <div className="precentage-bar" style={{width:`${precentage}%`}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
