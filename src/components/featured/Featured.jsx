import React from "react";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLqA8Z49aj-NuZk9CiS4LdpXCd4Ggo2bNZ4kjnkRHqC5xsv6Oe4IpIM8TmUAbZN8Ezes&usqp=CAU"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Las vegas</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xgHxURR5wFCnD81P0r19PYZlni2RPYV_7u0PO6jv0gCto3nl0ZbHhl96uLFeuZbzeDM&usqp=CAU"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Marid</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
