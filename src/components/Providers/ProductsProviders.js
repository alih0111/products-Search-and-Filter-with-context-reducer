import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "remove": {
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    }
    case "inc": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "dec": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        // removeHandler(action.id);
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        product.quantity--;
        const updatedProducts = [...state];
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }
    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;

      const updatedProducts = [...state];
      updatedProducts[index] = product;
      // setProducts(updatedProducts);
      return updatedProducts;
    }
    case "filter": {
      const value = action.selectedOption.value;

      if (value === "") return productsData;
      else {
        const updatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    }
    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "lowest") return _.orderBy(products, ["price"], ["asc"]);
      else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }
    case "search": {
      // const updatedProducts=productsData.filter((p)=>p.title==action.value)
      // console.log( action.value);
      const value = action.event.target.value;

      if (value === "") return state;
      else {
        const filteredProducts = state.filter((p) =>
          p.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );
        return filteredProducts;
      }
    }
    default:
      return state;
  }
};
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};
export default ProductsProvider;
export const useProducts = () => useContext(ProductContext);
export const useProductsAction = () => useContext(ProductContextDispatcher);
//   const products = useContext(ProductContext);

//   const removeHandler = (id) => {
//     const filteredProducts = products.filter((p) => p.id !== id);
//     setProducts(filteredProducts);
//   };
//   const IncHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const product = { ...products[index] };
//     product.quantity++;

//     const updatedProducts = [...products];
//     updatedProducts[index] = product;
//     setProducts(updatedProducts);
//   };
//   const changeHandler = (event, id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const product = { ...products[index] };
//     product.title = event.target.value;

//     const updatedProducts = [...products];
//     updatedProducts[index] = product;
//     setProducts(updatedProducts);
//   };
//   const decHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const product = { ...products[index] };
//     if (product.quantity === 1) {
//       removeHandler(id);
//     } else {
//       product.quantity--;
//       const updatedProducts = [...products];
//       updatedProducts[index] = product;
//       setProducts(updatedProducts);
//     }
//   };

//   return { removeHandler, IncHandler, decHandler, changeHandler };
// };
