import React from "react";
import StarRating from "../component/starRating";
import "../css/customerstyles.css";
export const CustomerReview = ({
  img,
  name,
  date,
  review,
  productRating,
  orderImg,
}) => {
  productRating = 4;
  return (
    <div style={{ margin: "10px" }}>
      <div className="review-body">
        <div className="review-li">
          <div className="customer-data-name">
            <img src={img} alt="user-img" />
            <div className="customer-name-review">
              <h6>{name}</h6>
              <p>{date} days ago</p>
            </div>
          </div>
          <div className="customer-review-text">
            <p>{review}</p>
          </div>
          <div className="rating">
            <StarRating rating={productRating} />
          </div>
        </div>

        <div className="order-img">
          <img
            src="https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="orderimage"
          />
        </div>
      </div>
    </div>
  );
};
