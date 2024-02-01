import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
.main{
    display:flex;
}
img{
    width:100%;
    height:auto;
}
.ll{
    padding:3px;
}
`
function Pik() {
  return (
    <Wrapper>
        <div className='main'>
       
        <div className = 'll'>
        <img src = './ta.png'/>
        </div>
        
        <div className = 'll'>
            <img src = './nx.png'/>
        </div>
        
        <div className = 'll'>
        <img src = './nxx.png'/>
        </div>
       
        <div className = 'll'>
        <img src = './nxxx.png'/>
        </div>
       
        <div className = 'll'>
        <img src = './nxxxxx.png'/>
        </div>
        
        <div className = 'll'>
        <img src = './86.png'/>
        </div>
        
        </div>
    </Wrapper>
  )
}

export default Pik