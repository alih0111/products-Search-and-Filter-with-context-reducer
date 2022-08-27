// import CounterOne from "./components/Context/CounterOne";
// import CounterProvider from "./components/Context/CounterProvider";
// import CounterOneReducer from "./components//Reducer/CounterOneReducer";
// import CounterProviderReducer from "./components//Reducer/CounterProviderReducer";
// import CountReducer from "./components/Reducer/CountReducer";
// import CounterReducer2 from "./components//Reducer/CountReducer2";

// import React, { useReducer, useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import ProductList from "./components/ProductList";
import Wrapper from "./components/hoc/Wrapper";
// import ProductsProvider, {
//   useProducts,
//   useProductsAction,
// } from "./components/Providers/ProductsProviders";


import ProductsProvider from "./components/Providers/ProductsProviders";
import Filter from "./components/Filter/Filter";
// import SearchBar from "./common/Search/Search";

//  function App() {

//   return (
//     <>
// {
//    <CounterProvider>
// }
// {
//    <CounterProviderReducer>
//         <p>welcome</p>
// }
// {
//    <CountReducer/>
// }
// {
//    <CounterReducer2/>
// }
// {
//    <CounterOne/>
// }
// {
//   /<CounterOneReducer />
//       </CounterProviderReducer>
// }
// {
//   </CounterProvider>
// }
//     </>
//   );
// }

// export default App;

const App = () => {

  return (
    <>
      <ProductsProvider>
      <Navbar />
      
      <Filter/>
      <ProductList />
      </ProductsProvider>
    </>
  );
};
export default Wrapper(App, "container");
