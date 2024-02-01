import React from 'react'
import styled , { keyframes }from 'styled-components'
import { FiArrowDownCircle } from "react-icons/fi";

const arrowBounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
    color: #FFF; 
  }
  40% {
    transform: translateY(-10px);
    color: pink;
  }
  60% {
    transform: translateY(-5px);
    color: violet;
  }
`;
const Wrapper = styled.div`
.Banner{
    background:url(./Bano.png);
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
}
.content{
    @media(min-width:768px){
        
    margin-bottom:100px;
    padding-left:93px;
    h1{
        font-size:64px;
        font-weight:600px;
    }
    p{
      font-size:20px;
      font-weight::400px;
    }
  }
}
p{
   font-size:21px;
}
h1{
        margin-top:0px;
        margin-bottom:0px;


    } 
svg{
  @media(min-width:1200px){
        margin-bottom:-14px;
        margin-left:15px;
      }
      animation: ${arrowBounce} 1.5s infinite; /* Apply the arrowBounce animation */
        width: 40px;
height: 40px;
flex-shrink: 0;
stroke-width: 1.2px; 
@media(max-width:1024px){
  position:absolute;
  padding-left:15px;
}
       
    }
    
       
    
`

function Banz() {
  return (
<Wrapper>
    <div className = 'Banner'>
<div className='content'>
        <h1>Hospital</h1>
        <h1>Equipment</h1>
        <p>Learn more <FiArrowDownCircle /></p>
        </div>
    </div>
</Wrapper> 
 )
}

export default Banz