import * as React from 'react';
import { useState, useEffect, useReducer } from 'react';
import styled from 'styled-Components'

const CountUpButton = styled.button`
  width: 100px;
  height: 100px;
  font-size: 24px;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
  border: 1px solid #333;
`
const Count = styled.p`
  width: 100px;
  height: 100px;
  font-size: 24px;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
  border: 1px solid #333;
`

export const Practice = () => {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
  }

  window.addEventListener('click', () => {
    countUp()
  })

  return (
    <div>
      <CountUpButton>countUp</CountUpButton>
      <Count>{count}</Count>
    </div>
  )
}