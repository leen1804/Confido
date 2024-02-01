import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
padding:50px;
padding-top:80px;
@media(max-width:400px){
    padding:23px;
h2{
    font-size:54px;
}
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
     }
.up{
    display:flex;
    flex:1;
}
img{
    padding:6px;
}
p{
    text-align: justify; 
  -moz-text-align-last: right; 
  text-align-last: right;
  color: #090B19;
text-align: right;

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 187.5% */
}
h2{
    color: #005180;
font-family: "Product Sans";
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom:9px;
margin-top:9px;

letter-spacing: 1.44px;}
.content{
    padding-right:40px;
}
.contenty{
    padding-left:90px;
    padding-top:112px;

}
@media(max-width:1024px){
    .up{
      
        flex-direction:column;
    }
    .contenty{
        padding-top:20px;
        padding-left:0px;
  
    }
    p{
        -moz-text-align-last: left; 
  text-align-last: left;
text-align: left;  
    }
    .none{
        display:none;
    }
    .below{
     flex-wrap:wrap;   
    }
    img{
        width:48%;
    }
}
@media(max-width:667px){
    img{
        width:100%;
    }
}

`

function Trusted() {

  return (
   <Wrapper>
     <div className='up'>
    
        <div className = ' content'>
    <h1>they </h1>
    <h3>Our Clients </h3>
    <h1 className = 'below'> trusted us</h1>
</div>

<div className = ' contenty'>
    <h2>+200 Clients</h2>
    <p>We have years of experience in engineering, metal modification and  <br/> manufacturing to suite your needs and project.</p>
    
</div>


</div>
<div className ='below' >
<img  className = 'none'src = './min.png'/>
<img  className = 'none'src = './un.png'/>
<img  className = 'none'src = './univ.png'/>
<img className = 'none' src = './mr.png'/>
<img  src = './gok.png'/>
<img  src = './univ.png'/>
<img src = './high.png'/>
<img src = './min.png'/>
</div>
   </Wrapper>
  )
}

export default Trusted