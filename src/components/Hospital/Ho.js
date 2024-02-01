import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .main {
    display: flex;
    justify-content:space-between;
padding:60px;
@media (max-width:400px) {
  padding:20px;


  }
@media(max-width:768px){
display:block;
}
  }
  h1 {
    font-weight: 700;
    -webkit-text-stroke: 1px rgba(0, 81, 128, 0.30);
    @media (min-width: 768px) {
      font-size: 128px;
      margin-top: -30px;
      margin-bottom: 30px;
    }
    color: transparent;
    line-height: normal;
    letter-spacing: 2.56px;
    @media (max-width: 670px) {
      font-size: 60px;
      margin-top: -30px;
      margin-bottom: 30px;
    }
    @media (max-width:400px) {
      margin-top: -5px;


  }
  }
  h6 {
    color: #000;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    margin: 0px;
    letter-spacing: 0.72px;
    @media (max-width: 670px) {
      font-size: 20px;
    }
  }
  .para{
    width: 331px;
    @media (max-width:400px) {
    width:100%;

  }
  }
  p{
    color: #3A3838;
font-family: "Avenir Next";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 187.5% */
letter-spacing: 0.32px;
  }
  .content{
    padding-top:45px;
  }
`;

function Who() {
  return (
    <Wrapper>
      <div className="main">
       <div className="content">
          <h1>OUR </h1>
          <h6>a few words about us </h6>
          <h1 className="below"> PRODUCT</h1>
        </div>
    
           <div className="para">
<p>Beds and Mattresses, Patient Benches, Staff and visitors Chairs, Step Stools, Medical Aid Boxes, Drug Trolleys, Patient Trolleys, Emergency Trolleys, Doctors and other Stools, Tables, Steel Cabinets, Stretcher Beds, Exam Couches, Gyno Couches, Delivery Beds etc</p>      
<p><a>GET A QOUTE TODAY</a></p> 
 </div>

      </div>
    </Wrapper>
  );
}

export default Who;
