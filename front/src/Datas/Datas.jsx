
import React from "react";
import { ProductContext } from "../Context/productContext";
import { useContext } from "react";
import "./Data.css"
const Datas = () => {
  const { products } = useContext(ProductContext);

  return (<div>
    <div className="arrival">New Arrivals</div>
    <div className="datasContainer">
     
      {products.map((item) => (
        <div className="productBox" key={item._id}>
          <img className="imgg" src={item.image} alt="" />
          <p className="title" >{item.title} </p>
          <p className="title">{item.text} </p>
          <p className="price">{item.price} </p>
        </div>
      ))}
    </div>
    </div>
  );
};
export default Datas;