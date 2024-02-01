import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  padding: 80px;
  font-family: 'Product Sans';
  @media(max-width:400px){
    padding: 20px;
   
        }
`;

const Heading = styled.div`
  color: #000;
  font-size: 36px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  color: #606060;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.32px;
`;

const HighlightedText = styled.span`
  color: #005180;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

 .le{
  @media (min-width: 768px) {
    display:flex;
    flex-direction: row; 
    gap: 15px;
  }
 }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 1rem;
  width: 100%; 

  input {
    padding: 15px;
    border-radius: 4px;
    border: none;
    background: #f2f2f2;
    @media (min-width: 768px) {
      padding: 27px 55px 27px 30px;
    }
  }

  @media (min-width: 768px) {
    width: 480px; 
    
    

  }
`;

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; 

  
  textarea {
    padding: 15px;
    border-radius: 4px;
    border: none;
    background: #f2f2f2;
    @media (min-width: 768px) {
      padding: 27px 55px 10px 20px;
    }
  }
  input {
    padding: 15px;
    border-radius: 4px;
    border: none;
    background: #f2f2f2;
    @media (min-width: 768px) {
      padding: 27px 55px 27px 30px;
    }
  }

  textarea {
    height: 120px;
  }

  @media (min-width: 768px) {
    width:680px;

  }
`;

const SendMessageButton = styled.button`
  display: flex;
  width: 100%; 
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  background: #005180;
  margin-top: 2rem;
  color: #fff;
  border: none;
  border-radius: 4px;
`;


function ContactSection() {
  return (
   
    <Section>
      <Heading>Have a project in mind?</Heading>
      <Paragraph>
        For inquiries or to discuss your engineering, manufacturing, and
        cutting-edge equipment requirements, please contact our dedicated team
        at <HighlightedText>Confide Engineering</HighlightedText>. We
        specialize in providing innovative solutions for various needs.{' '}
        <HighlightedText>
          Let's collaborate to bring your vision to reality. Get in touch with
          us today!
        </HighlightedText>
      </Paragraph>
      <Form action="https://formsubmit.co/ruvarashemutitieillen@gmail.com" method="POST">
        <div className = 'le'>
        <InputContainer>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="example@gmail.com" />
          <input type="text" placeholder="Contact" />
        </InputContainer>
        <TextareaContainer>
          <input type="text" placeholder="Subject" />
          <textarea rows="4" placeholder="Message" />
        </TextareaContainer>
        </div>

        <SendMessageButton>Send Message</SendMessageButton>
      </Form>
    </Section>
   
  );
}

export default ContactSection;
