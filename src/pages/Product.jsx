import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart, getProductById } from "../app/slices/productSlice";
import NavbarContainer from "../components/NavbarContainer";

const Product = () => {
  const params = useParams();

  const { error, loading, dataById, cart } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleAddCart = (cart) => {
    dispatch(addCart(cart));
    // try {
    //   // Get the current cart items from localStorage (if any)
    //   const existingItems = JSON.parse(localStorage.getItem('cart')) || [];

    //   // Add the new item to the existing items
    //   existingItems.push(cart);

    //   // Save the updated items back to localStorage
    //   localStorage.setItem('cart', JSON.stringify(existingItems));

    //   // Optionally, you can display a success message or trigger a Redux action here
    // } catch (error) {
    //   // Handle any errors that may occur during localStorage operations
    //   console.error('Error saving item to localStorage:', error);
    // }
  };
  useEffect(() => {
    dispatch(getProductById(params));
  }, [cart]);
  if (loading) {
    return <h1 className="text-center align-middle">Loading...</h1>;
  } else if (error) {
    return <h1>Error...</h1>;
  } else if (dataById.length > 0 && dataById[0].img) {
    // Check if dataById has at least one item and if img is defined
    return (
      <div>
        <NavbarContainer />
        <div
          className="d-flex flex-row justify-content-evenly"
          style={{ marginTop: 30 }}
        >
          <div>
            <img src={dataById[0].img} width={400} className="" alt="Product" />
          </div>
          <div className="text-dark d-flex flex-column mt-5">
            <div className="fs-2 text-center mt-5 ">
              {dataById[0].productName}
            </div>
            <div className="mt-3 fs-4">
              <span className="fw-bold">Fabric:</span> {dataById[0].fabric}
            </div>
            <div className="mt-3 fs-4">
              <span className="fw-bold">Piece:</span> {dataById[0].piece}
            </div>
            <div className="fs-3 text-center ">
              <span className="fw-bold">Price:</span> Rs {dataById[0].price}
            </div>
            <button onClick={() => handleAddCart(dataById)}>add to Cart</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Data not available.</h1>;
  }
};

export default Product;
