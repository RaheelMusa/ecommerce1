import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import Button from '../button/button'
import Footer from '../footer/footer'
import styles from './cart.module.css'



export default function cartpage() {
     const [cart, setCart] = useState([])
  return (
    <div className={styles.container}>
     <h1>Cart is Empty</h1>

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
  )
}
