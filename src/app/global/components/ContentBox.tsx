'use client'

import { styled } from 'styled-components'
import colors from '../styles/colors'
const { dark } = colors

export const MainContentBox = styled.section`
  max-width: ${({ max }) => max || 750}px;
  min-width: ${({ min }) => min || 650}px;
  margin: 100px auto;
  border-radius: 40px;
  padding: 100px;
  box-shadow: 2px 2px 10px ${dark};
`
