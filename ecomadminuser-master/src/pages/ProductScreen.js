import React from 'react'
import styled from 'styled-components'
import HorizontalOptionBar from '../components/HorizontalOptionBar'
import NavBar from '../components/NavBar'
import ProductListCard from '../components/ProductListCard'
import {BiFilterAlt} from 'react-icons/bi'
import Footer from '../components/Footer'
import SimpleFormInput from '../components/SimpleFormInput'
import SimpleTextArea from '../components/SimpleTextArea'

const ProductScreen = () => {
    let productUrl = 'https://static01.nyt.com/images/2021/03/30/multimedia/28xp-shoes-09/28xp-shoes-09-mediumSquareAt3X.jpg'

    return (
        <>
          <NavBar/>
        <HorizontalOptionBar/>   
        <ListWrapper>
        <ProductOption>
                    <span className='productTitle'>Products </span>  
                    <div className='addProductBtn'>
                        <button><span>Add Product</span></button>
                    </div>             
            </ProductOption>
            <ProductImage src={productUrl} />
            <ProductDetail>
                <SimpleFormInput label={'Product Name'}  btnLabel={'Edit'} />
                <SimpleFormInput label={'Price'}  btnLabel={'Edit'} />
                <SimpleTextArea label={'Description'}  btnLabel={'Edit'} />
                <SimpleFormInput label={'Category'}  btnLabel={'Edit'} />
                <SimpleFormInput label={'Sub-Category'}  btnLabel={'Edit'} />
                <SimpleFormInput label={'Games'}  btnLabel={'Edit'} />
                <SimpleFormInput label={'Platform'}  btnLabel={'Edit'} />
                <SimpleFormInput label={'Geographical Area'}  btnLabel={'Edit'} />
            </ProductDetail>
                <SaveBtn>Save</SaveBtn>
        </ListWrapper>
        <Footer/>
        </>
    )
}

export default ProductScreen
const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
`
const ProductOption = styled.div`
    display: flex;
    width: 82%;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    .productTitle {
        font-size: 2rem;
        font-family: Montserrat;
        font-weight: 600;
        letter-spacing: 2px;
        color: ${({theme}) => theme.accent};
        
        @media screen and (max-width: 768px){
            font-size: 1rem;
         }
    }
    .addProductBtn{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .addProductBtn button {
        background: none;
        border: none;
        color: ${({theme}) => theme.text};
        font-size: 1.2rem;
        font-family: Montserrat;
        font-weight: 600;
        letter-spacing: 2px;
        cursor: pointer;

        @media screen and (max-width: 768px){
            font-size: 0.8rem;
         }
    }

    @media screen and (max-width: 768px){
      width: 90%;
      justify-content:space-between ;
    }
`
const ProductImage = styled.img`
    width: 100%;
    height: 30rem;
    object-fit: cover;
`
const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 1rem 0;
`
const SaveBtn = styled.button`
  cursor: pointer;
  background: var(--p-red);
  border: none;
  width: 10rem;
  color: #fff;
  float: right;
  height: 3rem;
  margin: 1rem 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
`