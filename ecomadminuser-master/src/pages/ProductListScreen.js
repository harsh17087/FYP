import React from 'react'
import styled from 'styled-components'
import HorizontalOptionBar from '../components/HorizontalOptionBar'
import NavBar from '../components/NavBar'
import ProductListCard from '../components/ProductListCard'
import {BiFilterAlt} from 'react-icons/bi'
import Footer from '../components/Footer'


const ProductListScreen = () => {
    const Data = [
        {
            productName: 'Nike',
            description: 'Best Nike on offer 50%',
            price: '1000',
            sellerName: 'John Cater'

        },
        {
            productName: 'Nike',
            description: 'Best Nike on offer 50%',
            price: '1000',
            sellerName: 'John Cater'

        },
        {
            productName: 'Nike',
            description: 'Best Nike on offer 50%',
            price: '1000',
            sellerName: 'John Cater'
        },
        {
            productName: 'Nike',
            description: 'Best Nike on offer 50%',
            price: '1000',
            sellerName: 'John Cater'
        },
        {
            productName: 'Nike',
            description: 'Best Nike on offer 50%',
            price: '1000',
            sellerName: 'John Cater'
        },
        {
            productName: 'Nike',
            description: 'Best Nike on offer 50%',
            price: '1000',
            sellerName: 'John Cater'
        },

    ]
    return (
        <>
        <NavBar/>
        <HorizontalOptionBar/>
        <ListWrapper>
            <ProductOption>
                    <span className='productTitle'>Products </span>  
                    <div className='addProductBtn'>
                        <button><BiFilterAlt size={20} color={'white'} />  <span>Add Product</span></button>
                    </div>             
            </ProductOption>
            <ProductListCont>
                    {
                        Data.map((item, index) => {
                            return (
                                <ProductListCard
                                    productName={item.productName}
                                    sellerName={item.sellerName}
                                    productImage={'https://static01.nyt.com/images/2021/03/30/multimedia/28xp-shoes-09/28xp-shoes-09-mediumSquareAt3X.jpg'}
                                    productPrice={item.price}
                                    />
                            )
                        })
                    }          
            </ProductListCont>
        </ListWrapper>
        <Footer/>
        </>
    )
}

export default ProductListScreen

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const ProductOption = styled.div`
    display: flex;
    width: 82%;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
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
const ProductListCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 90%;
    @media screen and (max-width: 768px){
      width: 100%;
      justify-content:space-between ;
    }
`
