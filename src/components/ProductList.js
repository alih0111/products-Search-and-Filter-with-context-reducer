import Product from "./Product/product";
// import React, { Component } from "react";
import { useProducts, useProductsAction } from "./Providers/ProductsProviders";

const ProductList = (props) => {
  const products = useProducts();
  // const {removeHandler,IncHandler,decHandler,changeHandler} = useProductsAction()
  const dispatch = useProductsAction();

  const renderProduct = () => {
    if (products.length === 0) return <div>there is no product in cart</div>;
    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          // onDelete={() => removeHandler(product.id)}
          // onInc={() => IncHandler(product.id)}
          // onDec={() => decHandler(product.id)}
          // onChange={(e) => changeHandler(e, product.id)}
          onDelete={() => dispatch({ type: "remove", id: product.id })}
          onInc={() => dispatch({ type: "inc", id: product.id })}
          onDec={() => dispatch({ type: "dec", id: product.id })}
          onChange={(e) => dispatch({ type: "edit", id: product.id, event: e })}
        />
      );
    });
  };

  return (
    <div>
      {!products.length && <div>go to shopping</div>}
      {renderProduct()}
    </div>
  );
};
export default ProductList;
