import React from "react"
import styled from "styled-components"
import HorizontalOptionBar from "../components/HorizontalOptionBar"
import NavBar from "../components/NavBar"
import SimpleFormInput from "../components/SimpleFormInput"
import Footer from "../components/Footer"
import {AiFillStar} from 'react-icons/ai'
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Profile = () => {
  let profilePicture =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"

  return (
    <>
      <NavBar />
      <HorizontalOptionBar />
      <ProfileWrap>
        <CoverSection>
          <HorizontalYellLine></HorizontalYellLine>
          <ActionBtn>Edit</ActionBtn>
        </CoverSection>
        <ProfileDetailSec>
          <div className="element_one">
            <img className="profile_pic" src={profilePicture} alt="" />
            <ProfileEditBtn>Edit</ProfileEditBtn>
          </div>
          <div className="element_two">
            <SimpleFormInput btnLabel={"Edit"} value={"Game2coin"} />
            <SimpleFormInput btnLabel={"Edit"} value={"Game2coin"} />
            <InputWrap>
            <div className="input_header_cont">
              <label htmlFor="inputbox">Gold Account/ Silver Account
              </label>
              <InputActionBtn>Subscribe</InputActionBtn>
            </div>
            <p>{`Gems: 60`}</p>
            <p>{`Sell: $5000`}</p>
            </InputWrap>
            <InputWrap>
            <div className="input_header_cont">
              <div className="label_cont">
                  <p>My Quation Shopper:</p>
                  <AiFillStar size={25} color={'#FF9900'} />
                  <AiFillStar size={25} color={'#FF9900'} />
                  <AiFillStar size={25} color={'#FF9900'} />
              </div>
             
              <InputActionBtn>Comments</InputActionBtn>
            </div>
            
            <div className="label_cont">
                  <p>My Quation Buyer:</p>
                  <AiFillStar size={25} color={'#FF9900'} />
                  <AiFillStar size={25} color={'#FF9900'} />
                  <AiFillStar size={25} color={'#FF9900'} />
              </div>
            </InputWrap>
            <SimpleFormInput btnLabel={""} placeholder={'Follow: @00 '} label={"Follow: @00 peoples"} />
            <SimpleFormInput btnLabel={""} label={"Discounts on lots"} />
            <SimpleFormInput btnLabel={"Change"} label={"Background Color"} />
            <SimpleFormInput btnLabel={""} label={"Shop Policy"} />
            <SimpleFormInput label={'Shop Policy Color'} btnLabel={"Change"} value={""} />
            <SimpleFormInput label={'Country'} btnLabel={"Edit"} value={"USA"} />
            
          </div>
        </ProfileDetailSec>
      </ProfileWrap>
      <ProductsSliderContainer>
        <SliderOption>
          <label className="slider_title">Recent Products</label>
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
      <Footer />
    </>
  )
}

export default Profile

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const CoverSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  background: url("https://images.unsplash.com/photo-1497100022365-1a3688dc53ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8");
  height: 30rem;
  background-size: cover;
  position: relative;
`
const HorizontalYellLine = styled.div`
  display: flex;
  background: #ffcc48;
  height: 1.5rem;
  width: 100%;
`
const ActionBtn = styled.div`
  position: absolute;
  border: none;
  padding: 0.8rem 3rem;
  max-height: 5rem;
  max-width: 4rem;
  color: var(--white);
  font-size: 0.8rem;
  font-family: Montserrat;
  font-weight: 600;
  right: 2rem;
  bottom: 2rem;
  cursor: pointer;
  background: var(--black-shade);
`
const ProfileEditBtn = styled.div`
  border: none;
  padding: 0.8rem 2rem;
  max-height: 3rem;
  max-width: 2rem;
  color: var(--white);
  font-size: 0.8rem;
  font-family: Montserrat;
  font-weight: 600;
  cursor: pointer;
  background: ${({theme}) => theme.accent}
`

const ProfileDetailSec = styled.div`
  display: flex;
  height: 50rem;
  margin: 1rem 0;
  @media(max-width: 768px){
      height: 60rem;
  }
  .element_one {
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 20%;
    justify-content: space-evenly;
    max-width: 20%;
    align-items: center;
    .profile_pic {
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
      border: 2px solid #ffcc48;
    }
  }

  .element_two {
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 80%;
    padding: 0rem 2rem;
    justify-content: space-evenly;
    align-items: center;
  }
`
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  /* align-items: center; */
  background: ${({ theme }) => theme.background};
  border-radius: 5px;
  margin: 5px 0px;

  .input_header_cont {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-top: 1rem;
    }
    
          .label_cont {
              display: flex;
              flex-direction: row;
              align-items: center;
          }

  label, p {
    padding: 0rem 1rem;
    color: ${({ theme }) => theme.secondryText};
    font-size: 0.8rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
  }
`

const InputField = styled.input`
  width: 85%;
  height: 2.5rem;
  background: none;
  border: none;

  :focus {
    outline: none;
  }
`
const InputActionBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.secondryText};
  font-size: 0.8rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
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