import Banner from "./Banner";
import "../style/home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [Products, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((error) => console.log(error));
  }, []);
//   console.log(Products)
  return (
    <>
      <Banner />
      <h4 className="text-center mt-5 mb-5 fw-bold">BUDGET BUYS</h4>
      <section className="container-fluid">
        <div className="row mb-5">
          {Products.map((data, index) => (
            <div className="col-6 col-sm-3 mb-5" key={index}>
             
                <div className="card ProductCard rounded-0">
                <Link to={`/product/${data.id}`} className="cardLink">
                  <img
                    src={data.images[0]}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-6">{data.title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fs-6 fw-bold">Rs. {data.price}</span>
                    <span className="text-danger fw-bold" style={{fontSize:'11px'}}>({data.discountPercentage} % OFF)</span>
                    </div>
                  </div>
                  </Link>
                  <div className="card-footer p-0 border-top-0">
                    <Link
                      to={"cart"}
                      className="btn w-100 rounded-0 fw-semibold"
                      style={{ backgroundColor: "#FF3F6C", color: "white" }}
                    >
                      Add to Bag
                    </Link>
                  </div>
                </div>
              
            </div>
          ))}
          ;
        </div>
      </section>
    </>
  );
}
