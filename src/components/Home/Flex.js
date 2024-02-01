import React from 'react'
import styled from 'styled-components'
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


const Wrapper = styled.div`
.pic{
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:left;
    background:url(./flex.png);
    height:90vh;
    @media(max-width:1024px){
height:70vh;
}
    h1{
        color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;

/* H2 Semibold */
font-style: normal;
font-weight: 600;
line-height: 64px; /* 116.364% */
    }
    .he{
        width:842px;
    }
}
.below{
display:flex;
background: #005180;
align-items:center;
color:white;
justify-content:space-around;
}
.left{
    display:flex;
}
h4{
    color: #FFF;
font-family: "Product Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 187.5% */
}
h5{
    color: #FFF;
font-family: "Product Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 187.5% */
letter-spacing: 0.32px;
text-transform: lowercase;
padding-left:20px;
}
@media(max-width:768px){
   h1{
    font-size:45px; 
}
    
}
@media(max-width:400px){
    h1{
        font-size: 25px;

    }

    .he{
        width:0%;
    }
    .below{
       display:block;
    }
    .left{
        flex-direction:column;
    }
    h4{
        margin-top:0px;
        margin-bottom:0px;
    }  
    h5{
        margin-top:0px;
        margin-bottom:0px;
    }  
    .right{
        padding-left:20px;
    }
}
@media(min-width:800px){
    h1{
        font-size: 55px;

    }
}

`
function Flex() {
  return (
  <Wrapper>
      
    <div className = ' pic'>
        <div className = 'he'>
        <h1>Through our service, we establish friendships, and it is our commitment to quality that sustains them.</h1>

        </div>
    </div>
    <div className = ' below'>
<div className = 'right'>
<h4>16 Ely Close Greencroft, Harare, Zimbabwe - view on map</h4>
</div>
<div className = 'left'>
<h5>sales@confidepay.co.zw</h5>
    <h5>follow us on <CiFacebook />
    <CiLinkedin /></h5>
    

    </div>


    </div>
   
  </Wrapper>  
  )
}

export default Flex
