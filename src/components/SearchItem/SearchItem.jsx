import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street </h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          sunt voluptates illum incidunt quidem, quia aliquam excepturi
          adipisci, similique itaque repudiandae a magni porro minima laborum.
          Voluptate commodi explicabo ex!
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
        {
          <div className="siRating">
            <span>Excellent</span>
            <button>500</button>
          </div>
        }
        <div className="siDetailTexts">
          <span className="siPrice">$300</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
