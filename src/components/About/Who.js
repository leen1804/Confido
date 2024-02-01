import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .main {
    display: flex;
    justify-content:space-between;
padding:60px;
@media(max-width:400px){
    padding: 20px;
   
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
    width:725px;
    @media(max-width:768px){
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
          <h1>who </h1>
          <h6>a few words about us </h6>
          <h1 className="below"> we are?</h1>
        </div>
      
        <div className="para">
        <p>
            The organization has achieved prominence as a leading manufacturer
            and supplier in various sectors, encompassing medical equipment,
            catering equipment, butchery equipment, bakery equipment, and
            commercial trolleys. Additionally, we are involved in the production
            of school and office furniture. Our core strengths lie in welding
            and metal fabrication. Simultaneously, our hardware division offers
            an extensive array of products, including window frames, door frames,
            paint, and related items.
          </p>
        <p>Confide Engineering stands as a recognized and respected brand, with a broad customer base spanning diverse industries and geographic regions. Our clientele comprises hospitals, educational institutions, corporations, contractors, individual consumers, municipal entities, and government agencies.</p> 
          <p>We take great pride in the superior quality of our products, all of which adhere to stringent international standards.</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Who;
