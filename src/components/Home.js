import Banner from "./Banner";
import '../style/home.css'
// import shoes from '../images/products/shoes.jpg'
import React, { useEffect, useState } from "react";

export default function Home() {

    const [Products, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data.products);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);
    // console.log(Products[2]);
    return (
        <>
            <Banner />
            <h4 className="text-center mt-5 mb-5">Crazy Deals</h4>
            <section className="container-fluid">
                <div className="row mb-5">
                    {Products.map((data, index) => (
                        <div className="col mb-5" key={index}>
                            <div className="card ProductCard">
                                <img src={data.images[0]} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text fw-semi">{data.title}</p>
                                </div>
                            </div>
                        </div>
                    ))};
                    {/* <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* <h4 className="text-center mt-5 mb-5">Brands You Can't Miss</h4>
            <section className="container-fluid">
                <div className="row mb-5">
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h4 className="text-center mt-5 mb-5">Budget Buys</h4>
            <section className="container-fluid">
                <div className="row mb-5">
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h4 className="text-center mt-5 mb-5">Brilliant Brands</h4>
            <section className="container-fluid">
                <div className="row mb-5">
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ProductCard">
                            <img src={shoes} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Deal Price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


        </>
    )
}