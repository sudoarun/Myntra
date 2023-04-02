import '../style/checkout.css'

export default function Checkout() {

    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="text-center pt-4 pb-4 w-25">
                    <h5 className='fw-bold mb-4'>PLEASE LOG IN</h5>
                    <span className='fw-semibold text-secondary'>Login to view items in Your Wishlist</span>
                    <div className="MyntraSpirit"></div>
                    <div>
                        <button className="btn btn-outline-primary px-5 py-3 fw-bold rounded-0">LOGIN</button>
                    </div>
                </div>
            </div>
        </>
    )
}