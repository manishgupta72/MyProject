import React from "react";

const ServiceCard = ({ curElem}) => {
    console.log({curElem});
  return (
    <div>
      
      <div className="card">
        <div className="card-img">
          <img src="./src/images/design.png" alt="service info" width="200" />
        </div>
        <div className="card-details">
          <div className="grid grid-two-cols">
            <p>{provider}</p>
            <p>{price}</p>
          </div>

          <h2>{service}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
