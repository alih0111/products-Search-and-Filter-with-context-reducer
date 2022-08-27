// import './product.css'
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
// import { useContext } from "react";

const Product = ({ product, onChange, onInc, onDelete, onDec }) => {

  return (
    <div className={styles.product}>
      <p>product name: {product.title} course</p>
      <p> product price: {product.price} </p>
      <span className={styles.value}>{product.quantity}</span>
      {/* <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={product.title}
      /> */}
      <button
        onClick={onDec}
        className={`${styles.button} ${
          product.quantity === 1 && styles.dec_button
        } `}
      >
        {product.quantity > 1 ? "-" : <BiTrash size="16px" color="red" />}
      </button>
      <button onClick={onInc} className={`${styles.button} ${styles.inc}`}>
        +
      </button>
      <button onClick={onDelete} className={styles.button}>
        delete
      </button>
    </div>
  );
};

export default Product;
