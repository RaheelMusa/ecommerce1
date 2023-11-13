import React from 'react'

const productItems = [
    {
        id:1,
        name: "Oil",
        discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
         price: 35,
        image: "product1.jpg",
        rate: 4.5,
        review: 50,
    },
    {
        id: 2,
        name: "Bags",
        discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
        price: 50,
        image: "product12.jpg",
        rate: 5,
        review: 17,

    },
    {
        id:3,
        name: "Headphones",
        discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
        price: 20,
        image: "product3.jpg",
        rate: 3,
        review: 20,
    },
    {
        id:4,
        name: "Medicine",
        discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
        price: 45,
        image: "product4.jpg",
        rate: 3.5,
        review: 10,
    },
    {
        id:5,
        name: "Toy Car",
        discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
        price: 25,
        image: "product5.jpg",
        rate: 4.2,
        review: 3,
    },
    {
        id: 6,
        name: "Sunglasses",
        discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
         price: 10,
        image: "product6.jpg",
        rate: 2,
        review: 5,
    },
    {
        id:7,
        name: "Shoes",
        discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
        price: 15,
        image: "product10.jpg",
        rate: 4,
        review: 7,
    },
    {
        id:8,
        name: "Hand Watch",
        discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
        price: 13,
        image: "product8.jpg",
        rate: 4.5,
        review: 1,
    },
    
  {
    id: 9,
    name: "Coffee Pack",
    price: 3,
    url: "#",
    image: "product13.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  {
    id: 10,
    name: "Face Wash",
    price: 2,
    url: "#",
    image: "product14.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  {
    id: 11,
    name: "Mobile Cover",
    price: 4,
    url: "#",
    image: "product15.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  {
    id: 12,
    name: "Air Pods",
    price: 1,
    url: "#",
    image: "product22.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  {
    id: 13,
    name: "Soft drinks",
    price: 1,
    url: "#",
    image: "product17.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  {
    id: 14,
    name: "decor",
    price: 8,
    url: "#",
    image: "product18.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  
  {
    id: 15,
    name: "Glasses",
    price: 3,
    url: "#",
    image: "product19.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  {
    id: 16,
    name: "Women Shoes",
    price: 5,
    url: "#",
    image: "product20.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  {
    id: 17,
    name: "Toys",
    price: 3,
    url: "#",
    image: "product2.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  {
    id: 18,
    name: "Coffee Pack",
    price: 3,
    url: "#",
    image: "product13.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  {
    id: 19,
    name: "Pepsi",
    price: 3,
    url: "#",
    image: "product7.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },
  {
    id: 20,
    name: "Glasses",
    price: 3,
    url: "#",
    image: "product19.jpg",
    discription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Id perspiciatis inventore doloribus nisi nihil eos nostrum. Voluptate 
    nemo asperiores dolore eveniet, sequi praesentium cumque quam magni doloribus 
    laboriosam beatae ea`,
  },

]

export default productItems
 