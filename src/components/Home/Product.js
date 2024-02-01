import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
.main{
    padding:70px 60px 60px 60px;
    @media(max-width:700px){
        padding:70px 10px 0 10px;
       }
    h1{

font-weight: 700;
-webkit-text-stroke: 1px rgba(0, 81, 128, 0.30);
@media(min-width:768px){
    font-size: 128px;
    margin-top:-30px;
    margin-bottom: 30px;
}
color:transparent;
line-height: normal;
letter-spacing: 2.56px;
@media(max-width:670px){
    font-size: 60px;   
    margin-top:-30px;
    margin-bottom: 30px; 
}
     }
    img{
        width:100%;
        height:auto;
       padding:8px;
       @media(max-width:800px){
        padding:8px 0 8px 0;
       }
    }
    
    
    .up{
        display:flex;
        @media(max-width:1024px){
            flex-direction:column;
}
      
    }
    .down{
        display:flex;
        @media(max-width:1024px){
            flex-direction:column;
            margin-top:70px;
            padding-left:20px;
}
    }
    p{
        color: #000;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 30px; 
letter-spacing: 0.72px;
@media(max-width:670px){
    font-size: 20px;    
}
    }
}
.up{
   margin-top:70px;
    }
    @media(max-width:1024px){
    .Pictures{
        display:flex;
    }
}
`
function Product() {
  return (
<Wrapper>
    <div className='main'>
  
<div className = ' content'>
 <h1>Our </h1>
 <p>What we make </p> 
<h1 className = 'below'> products</h1>
</div>

<div className = 'Pictures'>
    <div className = 'up'>
    <img src ='./1st.png'/>

   <img src ='./2nd.png'/>
 <img src ='./3rd.png'/>
    </div>
    <div className =' down'>
     <img src ='./4.png'/>
 <img src ='./5.png'/>
 <img src ='./6.png'/>
    </div>
</div>
</div>
</Wrapper>
  )
}

export default Product