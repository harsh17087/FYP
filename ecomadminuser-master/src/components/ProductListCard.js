import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
const ProductListCard = ({productImage,
    productPrice,
    sellerName,
    productName,}) => {
    return (
        <CardWrapper>
        <Link className="link" to="/product">
        <img
          className="productImage"
          src={productImage}
          alt=""
        />
        <div className="product_details">
          <label className="product_name">{productName}</label>
          <label className="product_price">{productPrice}</label>
          <label className="seller_name">{sellerName}</label>
        </div>
        </Link>
      </CardWrapper>
    )
}

export default ProductListCard

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: fit-content;
  .link {
    text-decoration: none;
  }
  .productImage {
    border-radius: 5px;
    cursor: pointer;
    width: 30rem;

    @media screen and (max-width: 768px){
      width: 10rem;
        
    }
  }

  .product_details {
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
  }

  .product_name {
    font-size: 1rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryText};
    margin-bottom: 0.3rem;    

  }
  .product_price {
    font-size: 1rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.3rem;
    cursor: pointer;

  }
  .seller_name {
    font-size: 1rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.3rem;
    cursor: pointer;

  }
`
