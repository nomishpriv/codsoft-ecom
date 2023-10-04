import React, { useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, updatePriceFilter } from "../app/slices/productSlice";
import NavbarContainer from "../components/NavbarContainer";
import ProductListItem from "../components/ProductListItem";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();

  const { error, loading, data, price } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const location = useLocation();

  useEffect(() => {
    dispatch(updatePriceFilter(0));
  }, [location]);

  const handlePriceChange = (e) => {
    dispatch(updatePriceFilter(e.target.value));
  };

  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>error....</p>;
  }
  return (
    <div>
      <NavbarContainer />
      <div className="d-flex flex-row justify-content-start">
        <div className=" border mt-3 fs-4 p-3 mx-3">
          <div className="text-nowrap">
            Shopping Filters
            <div className="d-flex flex-column">
              <button onClick={() => dispatch(updatePriceFilter(0))}>
                Reset
              </button>
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
          {data
            .filter((data) => {
              
              const number = parseFloat(data.price.replace(/,/g, ""));
              return number > price;
            })
            .map((data) => {
              
              return (
                <ProductListItem
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

export default ProductList;
