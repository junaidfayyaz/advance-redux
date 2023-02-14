import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setproduct } from "../Action/ProductAction";
import ProductComponent from "./ProductComponent";
let url = "https://fakestoreapi.com/products";

const Header = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(url);
      dispatch(setproduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log("products", products.productReducer.product);
  return (
    <>
      <div className="">
        <div className="">
          <h2>FakeShop</h2>
        </div>
      </div>
      <ProductComponent />
    </>
  );
};

export default Header;
