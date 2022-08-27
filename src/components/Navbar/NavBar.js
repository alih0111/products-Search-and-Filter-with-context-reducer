import styles from "./NavBar.module.css";
import PorductList1 from "../ProductList";
import { useProducts } from "../Providers/ProductsProviders";

const NavBar = () => {
  const products = useProducts();
  const totalItem = products.filter((p) => p.quantity > 0).length;
  return (
    <header className={styles.navBar}>
      <h2>new shopping</h2>
      <span>{totalItem}</span>
    </header>
  );
};
export default NavBar;
