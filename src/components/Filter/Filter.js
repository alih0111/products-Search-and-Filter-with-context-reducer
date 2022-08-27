import { useState } from "react";
import { useProductsAction } from "../Providers/ProductsProviders";
// import Select from "react-select";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/Search/Search";

const filterOptions = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

export default function Filter() {
  const dispatch = useProductsAction();
  const [filter, setfilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setfilter(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  return (
    <section>
      <SearchBar filter={filter} />
      <div className={styles.filter}>
        <p>Filter Products Based On:</p>
        <SelectComponent
          title="filter by size"
          onChange={filterHandler}
          value={filter}
          options={filterOptions}
        />
        <SelectComponent
          title="sort by price"
          onChange={sortHandler}
          value={sort}
          options={sortOptions}
        />
      </div>
    </section>
  );
}
