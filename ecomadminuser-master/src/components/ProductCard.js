import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const ProductCard = ({
  productImage,
  productPrice,
  sellerName,
  productName,
  setWidth,
  setHeight,
  imgHeight,
  imgWidth
}) => {


  return (
    <CardWrapper style={{ width: setWidth, height: setHeight }}>
      <Link className="link" to="/product">
      <img
        style={{ width: imgWidth, height: imgWidth }}
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

export default ProductCard

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  .link {
    text-decoration: none;
  }
  .productImage {
    border-radius: 5px;
    cursor: pointer;


    @media screen and (max-width: 768px){
      width: 5rem;
      height: 6rem;
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
