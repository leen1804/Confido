import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
@media(min-width:1200px){
    

.main{
  
    h1{

font-weight: 700;
-webkit-text-stroke: 1px rgba(0, 81, 128, 0.30);
@media(min-width:1024px){
    font-size: 128px;
    margin-top:-30px;
    margin-bottom: 30px;
}
color:transparent;
line-height: normal;
letter-spacing: 2.56px;
     }
     h3{
        color: #000;
font-size: 36px;

    }
}
.up{
    display:flex;
    padding:50px;
padding-bottom:0;
}
.down{
    display:flex;
    padding-left:50px;

}
img{
    padding:7px;
}
.contenty{
padding-left:107px;
margin-top:120px;
}
.zz{
    display:flex;
}
}
.down{
    @media(max-width:768px){
display:none;
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
@media(max-width:400px){
    font-size: 45px;
    margin-top:-30px;
    margin-bottom: 30px;
}
color:transparent;
line-height: normal;
letter-spacing: 2.56px;
     }
     @media(max-width:1024px){
img{
    width:100%;
    height:auto;
    

}
.zz{
    display:none;
}
.down{
    display:flex;
}

     }
     .content{
        @media(max-width:400px){
            margin-top:40px;
        }
     }

     @media(max-width:1026px){
        padding:59px;
       }
     @media(max-width:700px){
        padding:70px 10px 0 10px;
       }
`
function Service() {
  return (
    <Wrapper>
        <div className='main'>
            
       
        <div className='up'>
        <div className = ' content'>
    <h1>Our </h1>
    <h3>Our Clients </h3>
    <h1 className = 'below'> Services</h1>
</div>
<div className = ' contenty'>
<p>Our extensive range of services exemplifies our unwavering commitment to excellence 
    in metal fabrication and manufacturing. At Confide Engineering, we provide a diverse spectrum of services tailored to meet your precise needs. With our deep 
    expertise and cutting-edge equipment, we deliver versatile solutions to address all your metalworking requirements.</p>
    <div className='zz'>
    <img src ='./1.png'/>
    <img src ='./66.png'/>

    </div>
</div>

        </div>
        <div className='down'>
      
        <div className='left'>
         <div className='1'>
<img src ='./1.png'/>
 <img src ='./66.png'/>

    </div>
   
   <div className='2'>
<img src ='./22.png'/>

    <img src ='./33.png'/>

        
    </div>
   
</div>
<div className='right'>

    <div className='1'>
 <img src ='./1.png'/>
<img src ='./66.png'/>

    </div>
   
    <div className='2'>
 <img src ='./22.png'/>

   <img src ='./33.png'/>

        
    </div>
  
</div>

        </div>
        </div>
    </Wrapper>
  )
}

export default Service