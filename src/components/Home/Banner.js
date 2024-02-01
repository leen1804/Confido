import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FiArrowDownCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';

const arrowBounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
    color: #FFF; 
  }
  40% {
    transform: translateY(-10px);
    color: blue;
  }
  60% {
    transform: translateY(-5px);
    color: black;
  }
`;
const Wrapper = styled.div`
.Banner{
  background:url(./Banner.png);
  height:100vh;
  background-repeat: no-repeat;
  background-size:cover;
    background-position: center;
  display:flex;
  align-items:flex-end;
  color:white;
  @media(min-width:1200px){
    height:100vh;
  }
  height:70vh;  
  
  .content{
    @media(min-width:768px){
        
    margin-bottom:100px;
    padding-left:93px;
    h1{
      font-size:40px;
    }
    a{
      font-size:20px;
      font-weight::400px;
      color:white;
      text-decoration:none;
    }
  }
}
p{
   font-size:21px;
}
}
svg{
  @media(min-width:1200px){
        margin-bottom:-14px;
        margin-left:15px;
      }
      animation: ${arrowBounce} 1.5s infinite; 
        width: 40px;
height: 40px;
flex-shrink: 0;
stroke-width: 1.2px; 
@media(max-width:1024px){
  position:absolute;
  padding-left:15px;
}
       
    }
    @media(max-width:400px){
      h1{
        font-size:29px;
      }
      content{
        margin:20px;
      }
    }
    a{
      text-decoration:none;
      color:white;
    }
`
const Lank = styled.a`
  display: inline-flex;
  padding: 25px 17px 37px 17px;
  flex-direction: column;
  align-items: center;
  background: #005180;
  color: white;
  font-size: 20px;
  text-decoration: none;
  position: absolute;
  right: 0;
  bottom: 10rem; /* Default for larger screens */
  transform: translate(0, -50%);
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-orientation: mixed;

  @media (max-width: 1200px) {
    bottom: 5rem; 
  }
  @media (max-width: 1024px) {
    bottom: 44rem; 
  }

  @media (max-width: 992px) {
    bottom: 2rem; 
  }

  @media (max-width: 768px) {
    bottom: 24rem; 
    font-size: 24px; 
  }
  @media (max-width: 400px) {
    display:none;
  }

 
`;


function Banner() {
  return (
    
  <Wrapper>
    <div className = ' Banner'>
    <div className = ' content'  >
      <h1>With our Service, we make friends</h1>
      <h1> With our Quality we keep them</h1>
      <p><Link to="/About"
              exact
              >Learn more <FiArrowDownCircle /></Link></p>
    </div>
    </div>
    <Lank> <a href='#'></a> sales@confideengineering.co.zw</Lank>
    </Wrapper>
   
  )
}

export default Banner
