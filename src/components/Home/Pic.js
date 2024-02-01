import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
img{
    width:100%;
    
}

`

function Pic() {
  return (
    <Wrapper>
     <div className='pp'>
            <img src="./Frame 5.jpeg"/>
        </div>
    </Wrapper>
  )
}

export default Pic
