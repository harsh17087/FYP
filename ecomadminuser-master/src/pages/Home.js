import React from "react"
import HorizontalOptionBar from "../components/HorizontalOptionBar"
import NavBar from "../components/NavBar"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import Hero from '../assets/image/heroimg.svg'
import ProductCard from "../components/ProductCard"
import styled from 'styled-components'
import TopSellerCard from "../components/TopSellerCard"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import ContactForm from "../components/ContactForm"

const Home = () => {
  const topSellerData = [
    {
      fullname: "Leslie Alexander",
    },
    {
      fullname: "ffsie Alexander",
    },
    {
      fullname: "Courtney Henry",
    },
    {
      fullname: "Sounst Henry",
    },
  ]

  const sliderStyle = {
    height: '100vh',

   
  }
  return (
    <>
      <NavBar />
      <HorizontalOptionBar />
      <SliderContainer>

      <AwesomeSlider bullets={false}  className="sliderStyle">
        
        <div>
        <img style={{width: '100%'}} src={Hero} alt="" />
        </div>
        <div>
        <img style={{width: '100%'}} src={Hero} alt="" />
        </div>
      </AwesomeSlider>
      </SliderContainer>
      <ProductsSliderContainer>
        <SliderOption>
          <label className="slider_title">Products</label>
          <ViewBtn to="/productlist">
            View All
          </ViewBtn>
        </SliderOption>
        <SliderList>
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'10rem'}
             setHeight={'385px'}
             imgHeight={'234px'}
             imgWidth={'10rem'}
             />
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'10rem'}
             setHeight={'385px'}
             imgHeight={'234px'}
             imgWidth={'10rem'}
             />
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'10rem'}
             setHeight={'385px'}
             imgHeight={'234px'}
             imgWidth={'10rem'}
             />
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'10rem'}
             setHeight={'385px'}
             imgHeight={'234px'}
             imgWidth={'10rem'}
             />
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'10rem'}
             setHeight={'385px'}
             imgHeight={'234px'}
             imgWidth={'10rem'}
             />
      
        </SliderList>
      </ProductsSliderContainer>
      {/* second slider */}
      <ProductsSliderContainer>
        <SliderOption>
          <label className="slider_title">New Products</label>
          <ViewBtn to="/productlist">
            View All
          </ViewBtn>
        </SliderOption>

        <SliderList>
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'15rem'}
             setHeight={'385px'}
             imgHeight={'565px'}
             imgWidth={'15rem'}
             />
      
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'15rem'}
             setHeight={'385px'}
             imgHeight={'565px'}
             imgWidth={'15rem'}
             />
      
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'15rem'}
             setHeight={'385px'}
             imgHeight={'565px'}
             imgWidth={'15rem'}
             />
      
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'15rem'}
             setHeight={'385px'}
             imgHeight={'565px'}
             imgWidth={'15rem'}
             />
      
        </SliderList>
      </ProductsSliderContainer>
      <BannerImageCont>
         <img src="https://images.unsplash.com/photo-1599282176284-306385684d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="" />
      </BannerImageCont>
      <ProductsSliderContainer>
        <SliderOption>
          <label className="slider_title">Popular Products</label>
          <ViewBtn  to="/productlist">
            View All
          </ViewBtn>
        </SliderOption>
        <SliderList>
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'10rem'}
             setHeight={'385px'}
             imgHeight={'234px'}
             imgWidth={'10rem'}
             />
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'10rem'}
             setHeight={'385px'}
             imgHeight={'234px'}
             imgWidth={'10rem'}
             />
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'10rem'}
             setHeight={'385px'}
             imgHeight={'234px'}
             imgWidth={'10rem'}
             />
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'10rem'}
             setHeight={'385px'}
             imgHeight={'234px'}
             imgWidth={'10rem'}
             />
        <ProductCard 
             productImage={'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'}
             productPrice={'1222'}
             sellerName={'Seller Name'}
             productName={"Product Name"}
             setWidth={'10rem'}
             setHeight={'385px'}
             imgHeight={'234px'}
             imgWidth={'10rem'}
             />
      
        </SliderList>
      </ProductsSliderContainer>
      <EventContainer>
        <label>Events</label>
        <EventCardCont>
          <TopSellerCard 
            title={"Top Seller of the week"}
            btnLabel={"View"}
            noOfGem={10}
            item={topSellerData}
           
            />
          <TopSellerCard 
            title={"Top Seller of the week"}
            btnLabel={"View"}
            noOfGem={10}
            item={topSellerData}
           
            />
        </EventCardCont>
      </EventContainer>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Home

 

const SliderContainer= styled.div`
  display: flex;

  .sliderStyle {
    height: 40rem;

    @media  screen and (max-width: 768px) {
      height: 10rem;
    }
  }
`

const ProductsSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;
  margin: 2rem 0rem;
  .sliderStyle{
    height: 20vh;
  }
 
`


const SliderOption = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .slider_title {
    font-size: 1.5rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;  
  }
`


const SliderList = styled.div`
  display: flex;
  margin-top: 1rem;
  overflow-x: auto;
   ::-webkit-scrollbar  {
        width: 0px;
    }

`


const ViewBtn = styled(Link)`
  background: none;
  border: none;
  font-family: Montserrat;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  text-align: right;
  color: #747178;
  cursor: pointer;
`
const BannerImageCont = styled.div`
  display: flex;
  background-size: cover;
  
  img {
    height: 100%;
    width: 100%;

  }
`
const EventContainer= styled.div`
  display: flex;
  margin: 0rem 2rem;
  flex-direction: column;

  @media  screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    align-items: center;
  }
  label {
    font-size: 2rem;
    font-family: Montserrat;
    font-weight: bold;
    letter-spacing: 0.40;
  }
`
const EventCardCont= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media  screen and (max-width: 768px) {
    flex-direction: column;
    }
  
`