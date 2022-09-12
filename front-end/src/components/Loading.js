import React from 'react'
import styled from 'styled-components';

export default function loading() {
  return (
    <Loading>
      <div className='loading' />
    </Loading>
  )
}

const Loading = styled.div`
.loading {
  animation: is-rotating 1s infinite;
  width: 25px;
  height: 25px;
  border: 6px solid var(--fundo);
  border-top-color: var(--black);
  border-radius: 50%;
  margin: 15px;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
 
`