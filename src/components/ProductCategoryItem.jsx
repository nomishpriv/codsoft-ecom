import React from "react";
import { Link } from "react-router-dom";

const ProductCategoryItem = ({ name, img, price,id }) => {
  return (
    <div className="p-2 ">
      <Link to={`/codsoft-ecom/product/${id}`}>
        <img width={330} height={500} src={img} />
        <div className="text-center border">
          <div className="  ">{name}</div>
          <div className="">Rs {price}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCategoryItem;
