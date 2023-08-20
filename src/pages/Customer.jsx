import React, { useState } from "react";
import Carousel1 from "react-multi-carousel";
import Carousel2 from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import { CustomerOrder } from "../component/customerOrder";
import { CustomerReview } from "../component/customerReview";

import "../css/customerstyles.css";
export const Customer = () => {
  const customer = {
    name: "Mattie Blooman",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    date: 2,
    rate: 4.0,
    img: "https://s3-alpha-sig.figma.com/img/819c/4cda/82ecef60631f75b990873e5722c4bc08?Expires=1693180800&Signature=cUI4vfYs5BPlczZKyTk9N-S9y-OvBAyffkaw-6FSd84Lb7Fc6mMMEzl-J7dyhG-dEd3dd12KGpTjKINMMaiLg0gctSTMxufkZwR8ajHXysJOS9UH7CW106o4DUPKNeQ7-Rs9IZtIandA1-MX~-zIg3sA6qccThapcHRVYC0dzD4YxUR-3Ar987Rx2eBV7gAmvixqGPTUQ0XQ-V3Uwq0Oyz1utXQF1rcMqKfUk~SyQ-6c-iuNHjc-mZEpjO7lLjT25aNqyDQ1GDS0G4NVMtFBx3~l6-OBAcGjFLgpK8yWAIpaPKkWtgczV2USOyNqxDXUqo0Jm2PR9PcNVmfVqCUavA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    order: "Edinburgh",
    precentage: 70,
    orderImg:"https://s3-alpha-sig.figma.com/img/fed4/56ff/65002905c5ac0e408510b6fe534bf49e?Expires=1693180800&Signature=TOoMdFrbapgP1nyJtgiPkmIjBdByO5IEWBqJVWYDXwkBj1pCYL6AwFa8Wdx8kOWC~NtO92NIgUanjRFrrDJmL1cekjOqKKQCf0W1DeHtTuI6T85QlQQ2wJxgFgVMZ32nRYt7CtzPOU0S-zKKAj55vkhIgBwGYOxWAIW8dx9tUhsC-3GM2NdZFQT48VVoILQ16~c~wMC5AHZVoLYvhcqazZ2dQ4g5g4pnOS~6SqQ7WhHwgQHeAR1JIjt6-KdJul-a18rW8833Wqg3-liCDh5Dzz5ZIBEH0k86~cuhttd9eRartbT50l1flPrVQMyRXM7XuAUKr-7~g~zL8CuI1mrR4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsiveReview={
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
  };

  return (
    /* <div style={{height:'400px',display:'flex',flexDirection:'column',flexWrap:'wrap', gap:"4px"}}>
      <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
      <CustomerOrder />
      <CustomerOrder />
      <CustomerOrder />
      <CustomerOrder />
      <CustomerOrder />
      <CustomerOrder />
      <CustomerOrder />
    </div> */
    <div className="container">
      <div className="header">
        <h3>Customer orders</h3>
        <div className="carousel-container">
          <Carousel1
            responsive={responsiveReview}
            autoPlay={false}
            autoPlaySpeed={2000}
            infinite={false}
            style={{ height: "400px" }}>
            <div>
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
            </div>
            <div>
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
            </div>
            <div>
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
            </div>
            <div>
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
            </div>
            <div>
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
            </div>
            <div>
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
            </div>
            <div>
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
            </div>
            <div>
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
              <CustomerOrder name={customer.name} precentage={customer.precentage} img={customer.img} order={customer.order} />
            </div>
          </Carousel1>
        </div>
      </div>
      <div className="customer-review">
        <div className="customer-review-header">
          <h3>Customer Review</h3>
          <p>Eum fuga consequuntur utadsjn et.</p>
        </div>
        <Carousel2
          responsive={responsiveReview}
          autoPlay={false}
          autoPlaySpeed={2000}
          infinite={false}
          style={{ height: "100px" }}>
          <div>
            <CustomerReview
              name={customer.name}
              img={customer.img}
              productRating={customer.rate}
              date={customer.date}
              review={customer.review}
              orderImg={customer.orderImg}
            />
            
          </div>
          <div>
            <CustomerReview
              name={customer.name}
              img={customer.img}
              productRating={customer.rate}
              date={customer.date}
              review={customer.review}
              orderImg={customer.orderImg}
            />
          </div>
          <div>
            <CustomerReview
              name={customer.name}
              img={customer.img}
              productRating={customer.rate}
              date={customer.date}
              review={customer.review}
              orderImg={customer.orderImg}
            />
            
          </div>
        </Carousel2>
      </div>
    </div>
  );
};
