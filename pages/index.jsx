import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import productItems from "./components/products/product";
import { useState } from "react";
import Button from "./components/button/button";
export default function Home() {
  const [product, setProduct] = useState(productItems);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);


  const addItem = (myProduct) => {
    setCart((newitem) => [...newitem, myProduct]);
  };
  const removeItem = (id) => {
    // alert("You are removing product from cart")
    const dlt = cart.filter((item) => item.id !== id);
    setCart(dlt);

  };
  const changeValue = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/eccommerce.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our product ({product.length})</h1>
          <div className={styles.headerinput}>  
            <a href="../components/cart/cartpage"><i className="fa-solid fa-cart-shopping"><span>{cart.length}</span></i></a>
          <input
            type="search"
            placeholder="Search Here..."
            onChange={changeValue}
          />
          </div>
        </div>

        <div className={styles.products}>
          {product
            .filter((myProduct) => {
              return myProduct.name.toLowerCase().includes(query);
            })
            .map((myProduct) => (
              <div key={myProduct.id} className={styles.productList}>
                <img src={myProduct.image} className={styles.image} />
                <div className={styles.content}>
                  <h1 className={styles.productTitle}>{myProduct.name}</h1>
                  <p className={styles.productDesc}>{myProduct.discription.substr(0, 100)}</p>
                  <div className={styles.itemDetail}>
                    <p className={styles.productPrice}>
                      Price: {myProduct.price}$
                    </p>
                    <p className={styles.productRate}>
                      Reviews: {myProduct.review}
                    </p>
                  </div>
                </div>
                <div
                  className={styles.button}
                  onClick={() => addItem(myProduct)}
                >
                 <Button text="Add to cart" />
                </div>
              </div>
            ))}
        </div>
        <div className={styles.cart}>
          <div className={styles.cartHeader}>
            <h1>Cart</h1>
            <h3>Quantity: {cart.length}</h3>
          </div>
          <div>
            {cart.map((item) => {
              return (
                <>
                  <div key={item.id} className={styles.cartList}>
                    <img src={item.image} className={styles.cartImg} />
                    <div className={styles.content}>
                      <h1>{item.name} </h1>
                      <p className={styles.cartPara}>{item.discription} </p>
                      <div className={styles.itemDetail}>
                        <p className={styles.productPrice}>
                          Price: {item.price}$
                        </p>
                        <p className={styles.productRate}>
                          Reviews: {item.review}
                        </p>
                      </div>
                    </div>

                    <div
                      className={styles.button}
                      onClick={() => removeItem(item.id)}
                    >
                      <Button text="Remove from cart" className={styles.cartbtn}  />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
