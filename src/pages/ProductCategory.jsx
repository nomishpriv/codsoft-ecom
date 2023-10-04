import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  getProductCategory,
  updatePriceFilter,
} from "../app/slices/productSlice";
import NavbarContainer from "../components/NavbarContainer";
import ProductCategoryItem from "../components/ProductCategoryItem";

const ProductCategory = (props) => {
  const params = useParams();
  const { categoryName } = params;

  const { dataCategory, loading, price } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCategory(categoryName));
  }, []);

  const handlePriceChange = (e) => {
    dispatch(updatePriceFilter(e.target.value));
  };

  const location = useLocation()

  useEffect(() => {
    dispatch(updatePriceFilter(0))
  },[location])

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <NavbarContainer />
      <div className="d-flex flex-row justify-content-start">
        <div className=" border mt-3 fs-4 p-3 mx-3">
          <div className="text-nowrap">
            Shopping Filters
            <div className="d-flex flex-column">
              <button onClick={() => dispatch(updatePriceFilter(0))}>Reset</button>
              <label>Price:{price} </label>

              <input
                type="range"
                onChange={handlePriceChange}
                step={1000}
                min={0}
                max={20000}
                value={price}
              />
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-row flex-wrap "
          style={{ marginTop: 15, marginLeft: 50 }}
        >
          {dataCategory
            .filter((data) => {
              const number = parseFloat(data.price.replace(/,/g, ""));
              return number > price;
            })
            .map((data) => {
              return (
                <ProductCategoryItem
                  id={data.id}
                  key={data.id}
                  name={data.productName}
                  img={data.img}
                  price={data.price}
                  fabric={data.fabric}
                  piece={data.piece}
                />
              );
            })}

          {/* {dataCategory.map((category) => (
            <ProductCategoryItem
              id={category.id}
              key={category.id}
              name={category.productName}
              img={category.img}
              price={category.price}
              fabric={category.fabric}
              piece={category.piece}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
