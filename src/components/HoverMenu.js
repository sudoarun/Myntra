export default function HoverMenu({ color }) {
  // console.log(name);
  return (
    <div>
      <div className="row px-5 rounded-0">
        <div className="col-3 px-4 pt-4">
          <div>
            <span className={`myntratext fw-bold ${color}`}>Topwear</span>
          </div>
          <div className="mt-2 fw-normal">
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Sweatshirts</li>
            <li>Jackets</li>
            <li>Suits</li>
          </div>
        </div>
        <div className="col-3 bg-light px-4 pt-4">
          <div>
            <span className={`myntratext fw-bold ${color}`}>Bottomwear</span>
          </div>
          <div className="mt-2 fw-normal">
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Sweatshirts</li>
            <li>Jackets</li>
            <li>Suits</li>
          </div>
        </div>
        <div className="col-3 px-4 pt-4">
          <div>
            <span className={`myntratext fw-bold ${color}`}>Footwear</span>
          </div>
          <div className="mt-2 fw-normal ">
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Sweatshirts</li>
            <li>Jackets</li>
            <li>Suits</li>
          </div>
        </div>
        <div className="col-3 bg-light px-4 pt-4">
          <div>
            <span className={`myntratext fw-bold ${color}`}>
              Sports & Active Wear
            </span>
          </div>
          <div className="mt-2 fw-normal">
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Sweatshirts</li>
            <li>Jackets</li>
            <li>Suits</li>
          </div>
        </div>
      </div>
    </div>
  );
}
