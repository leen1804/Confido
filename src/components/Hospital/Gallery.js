import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
@media(max-width:768px){
        
          display:none;
        
        
       }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 80px 0 ;
`;

const MasonryItem = styled.div`

  margin-bottom: 0px;
  .none{
    @media(max-width:1026px){
        display:none;
        
       }
  }
  
`;

const Image1 = styled.img`
  width: 662px;
  height: 248px;
  flex-shrink: 0;
`;

const Image2 = styled.img`
  width: 335px;
  height: 248px;
  flex-shrink: 0;
`;

const Image3 = styled.img`
  width: 335px;
  height: 248px;
  flex-shrink: 0;

`;


function Gallery() {
  return (
    <Wrapper>
       
      <MasonryItem>
        <Image1  className = 'noney'src="./w.png" alt="Image 1" />
      </MasonryItem>
      <MasonryItem>
        <Image2 className = 'noney'src="./small.png" alt="Image 2" />
      </MasonryItem>
      <MasonryItem>
        <Image3 className = 'none' src="./small.png" alt="Image 3" />
      </MasonryItem>
      <MasonryItem>
        <Image1  className = 'none'src="./w.png" alt="Image 1" />
      </MasonryItem>
      <MasonryItem>
        <Image2  className = 'none'src="./small.png" alt="Image 2" />
      </MasonryItem>
      <MasonryItem>
        <Image2  className = 'none'src="./small.png" alt="Image 2" />
      </MasonryItem>
      <MasonryItem>
        <Image1  className = 'none'src="./w.png" alt="Image 1" />
      </MasonryItem>
      <MasonryItem>
        <Image2  className = 'none'src="./small.png" alt="Image 2" />
      </MasonryItem>
      <MasonryItem>
        <Image2 className = 'none' src="./small.png" alt="Image 2" />
      </MasonryItem>
      
    </Wrapper>
  );
}

export default Gallery;
