import "../style/product.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Product() {
  const [Product, setProduct] = useState([]);
  const params = useParams();
  const { id } = params;
  //   console.log(id)
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const [showElement, setShowElement] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(true);
    }, 1000);
  }, []);

  //   console.log(Product)
  return (
    <>
      <section className="pt-4 container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 imgSection pe-4">
            {showElement ? (
              <div className="row">
                <div className="col-sm-6">
                  <img src={Product.images[0]} alt="img" className="me-2 w-100" />
                </div>
                <div className="col-sm-6">
                  <img src={Product.images[1]} alt="" className="w-100" />
                </div>
              </div>
            ) : (
              <div></div>
            )}{" "}
          </div>
          <div className="col-12 col-sm-6 p-5">
            <div className="border-bottom border-2 pb-4">
              <h4>{Product.title}</h4>
              <p className="pb-2 text-secondary font-monospace">
                {Product.description}
              </p>
              <span className="border border-1 pt-1 pb-1 px-2">
                <span className="fw-bold">{Product.rating}</span>{" "}
                <i className="bi bi-star-fill text-success"></i> Rating
              </span>
            </div>
            <div className="mt-3">
              <div>
                <span className="fw-bold">Rs. {Product.price}</span>
                <span className="fw-bold text-danger ps-5">
                  ({Product.discountPercentage} % OFF)
                </span>
              </div>
              <div className="buySection mt-4">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <Link
                      to={"/cart"}
                      className="btn-myntra pt-3 pb-3 px-5 fw-bold rounded-1"
                    >
                      <i className="bi bi-bag"> </i>Add To Bag
                    </Link>
                  </div>
                  <div className="col-12 col-sm-6">
                    <Link
                      to={"/checkout"}
                      className="pt-3 pb-3 px-4 border rounded-1 fw-bold bg-body wishListBtn"
                    >
                      <i className="bi bi-heart"> </i>WISHLIST
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Product;
