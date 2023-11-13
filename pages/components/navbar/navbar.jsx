"use client"
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image';
const link = [
    {
        id: 1, 
        title: "Home",
        url: "/"
    },
    {
        id: 2, 
        title: "Contact",
        url: "/"
    },
    {
        id: 3, 
        title: "About",
        url: "/"
    },
    {
        id: 4, 
        title: "Product",
        url: "/",
    },
  ];

const Navbar = () => {
  
    return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
        <Image
        src="/eccommerceLogo.png"
        alt=""
        width={100}
        height={80}
        className={styles.img}
        />
       Ecommerce
        </Link>
        <div className={styles.links}>
            {link.map(myLink => (
                    <Link key={myLink.id} href={myLink.url} className={styles.mylink}>
                        {myLink.title}
                    </Link>
                ))}
            
        <button className={styles.btn}>Logout</button>
        </div>

    



    </div>
  )
}

export default Navbar