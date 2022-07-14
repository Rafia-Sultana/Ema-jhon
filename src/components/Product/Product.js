import React from 'react';
import './Product.css'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ product, handleClick }) => {

    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>Price:${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>ratings:{ratings}</small></p>
            </div>
            <button onClick={() => handleClick(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <p> <AiOutlineShoppingCart size={20}></AiOutlineShoppingCart></p>
            </button>

        </div>
    );
};

export default Product;