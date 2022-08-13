import React from 'react';
import productImg from "../../../assets/images/product_2.1.jpg";
import {Link} from "react-router-dom";
import "../../../styles/productCard.css";

const productCard = (props) => {

  const {id,title,price,image01} = props.item
  return (
    <div className='product__item'>
        <div className='product__img'>
            <img src={image01} className='product__img' alt="product-img"/>
        </div>

        <div className='product__content'>
            <h5><Link to={`/foods/${id}`} >{title}</Link></h5>
            <div className='product__price__cartbtn'>
                <span className='product__price'>${price}</span>
                <button className='addToCart__btn'><span>Add to Cart</span></button>
            </div>
        </div>
    </div>
  )
}

export default productCard