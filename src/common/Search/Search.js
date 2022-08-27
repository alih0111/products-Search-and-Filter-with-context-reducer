import { useState } from "react";
import { useProductsAction } from "../../components/Providers/ProductsProviders";
import styles from "./search.module.css";

const SearchBar = ({filter}) => {
  const [value, setValue] = useState("");
  const dispatch = useProductsAction();

  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOption:filter });
    dispatch({ type: "search", event:e });
    setValue(e.target.value);
  };

  return (
    <div className={styles.formControl}>
      <input
        type="text"
        onChange={changeHandler}
        value={value}
        placeholder="search for ..."
      />
    </div>
  );
};

export default SearchBar;
