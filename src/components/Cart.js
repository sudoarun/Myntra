export default function Cart() {
  return (
    <>
      <section className="cartContainer">
        <div className="pt-5">
          <div className="row">
            {/* Left side of Cart */}

            <div className="col-12 col-sm-7">
              <div className="border pt-2 pb-2 px-3 d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold">Check delivery time & services</span>
                <button className="text-danger border bg-body fw-bold pt-2 pb-2 px-3 fs-6-override border-danger">
                  ENTER PIN CODE
                </button>
              </div>
              <div className="border p-2 mb-2">
                <span>
                  <i class="bi bi-truck"></i> Yay!{" "}
                  <strong>No convience fee</strong> on this order
                </span>
              </div>
              <div className="p-3 d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fs-6 fw-bold">ITEMS IN BAG</h5>
                </div>
                <div className="d-flex fw-bold text-secondary fs-6-override align-items-center">
                  <div className="border-end border-2 pe-2">
                    <span>REMOVE</span>
                  </div>
                  <div className="ps-2">
                    <span>MOVE TO WISHLIST</span>
                  </div>
                </div>
              </div>
              <div className="border p-2 d-flex ">
                <div className="w-25">
                  <img
                    src="https://i.dummyjson.com/data/products/2/1.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="justify-content-start w-75">
                  <div className="">
                    <span className="d-block">Title</span>
                    <span className="d-block">Description</span>
                    <span className="d-block">Brand</span>
                    <span className="d-block">Price</span>
                  </div>
                </div>
                <div className="justify-content-end">
                  <i class="bi bi-x-lg"></i>
                </div>
              </div>
            </div>

            {/* Right side of Cart */}

            <div className="col-12 col-sm-5 border p-3">
              <span className="fs-6-override fw-bold text-secondary">
                COUPONS
              </span>
              <div className="d-flex justify-content-between mt-2 align-items-center">
                <div>
                  <i class="bi bi-ticket"></i>
                  <span className="fw-bold fs-6-override"> Apply Coupons</span>
                </div>
                <div>
                  <button className="bg-body pt-1 pb-1 px-3 fs-6-override fw-bold border text-danger border-danger">
                    APPLY
                  </button>
                </div>
              </div>
              <div className="text-center border-bottom pb-2 mt-2">
                <span className="fs-6-override">
                  <strong className="text-danger">Login</strong> to get upto
                  &#8377;200 OFF on first order
                </span>
              </div>
              <div className="mt-3">
                <h6 className="fw-bold fs-6 mb-3">PRICE DETAILS</h6>
                <div className="d-flex justify-content-between fs-6-override fw-semibold text-secondary mt-2">
                  <span>TOTAL MRP</span>
                  <span>&#8377; 1700</span>
                </div>
                <div className="d-flex justify-content-between fs-6-override fw-semibold text-secondary mt-2">
                  <span>Discount on MRP</span>
                  <span className="text-success text-decoration-line-through">
                    &#8377; 1700
                  </span>
                </div>
                <div className="d-flex justify-content-between fs-6-override fw-semibold text-secondary mt-2">
                  <span>Coupon Discount</span>
                  <span className="text-danger">Apply Coupon</span>
                </div>
                <div className="d-flex justify-content-between fs-6-override fw-semibold text-secondary mt-2 pb-3 border-bottom">
                  <span>
                    Convenience Fee{" "}
                    <strong className="text-danger">Know More</strong>
                  </span>
                  <span className="text-success">
                    <span className="text-decoration-line-through text-secondary">
                      &#8377; 69
                    </span>{" "}
                    FREE
                  </span>
                </div>
                <div className="d-flex justify-content-between fs-6 fw-bolder mt-3">
                  <span>TOTAL AMOUNT</span>
                  <span className="text-danger">&#8377; 1700</span>
                </div>
                <div>
                  <button className="border w-100 pt-2 pb-2 btn-myntra fw-semibold rounded-1 mt-3">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
