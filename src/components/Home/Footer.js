import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
color:white;
.main{
    display:flex;
    @media(max-width:1000px){
        display:block;  
    }
}
.left{
    background: #0255A1;
    display:flex;
    flex-direction:column;
    padding:80px 130px 80px 130px;
    align-items:center;
    p{
        font-weight:600;
    }
    
    }
    .right{
        background: #00215B;
        padding:80px;
    }
    .two{
        display:flex;
        justify-content:space-around;
        .r{
            padding-right:162px;
        }
        .l{
            padding-left:24px;
        }
    }
    .below{
        display:flex;
        margin-top:70px;
        gap:156px;
        @media(max-width:1000px){
        display:block;  
    }
    }
    @media (max-width: 325px) {
        .two{ .r{
            padding-right:122px;
        }
    }
  }
`

function Footer() {
  return (
    <Wrapper>
         
        <div className ='main'>
        <div className='left'>
<p>Call Us Today</p>   

<p>16 Ely Close Greencroft</p>
<p>Harare, Zimbabwe</p>

<p>Tel: +263 (4) 331 307-8</p>    
<p>Cell: +263 772 420 069</p>

<p>sales@confidepay.co.zw</p>

</div>

        <div className='right'>
        <div className='two'>
<div className='r'>
<h2>Quick Links</h2>
<p>About Company</p>
<p>Our Services</p>
<p>Our Projects</p>
<p>Contacts</p>
</div>
<div className='l'>
<h2>Our Projects</h2>
<p>Hospital Equipment</p>
<p>School and office Equipment</p>
<p>Catering Equipment, Industrial Kitchen & Butchery Equipment</p>
<p>Commercial Trolleys</p>
<p>Machinery and Capacity</p>
<p>General Hardware Supplies</p>
</div>

</div>
<div className='below'>
<p className='pd'>Confide Engineering ©  All rights reserved 2024. </p>
<p>Crafted with love by revixions Team</p>
</div>
        </div>
        </div>
       
    </Wrapper>
  )
}

export default Footer
