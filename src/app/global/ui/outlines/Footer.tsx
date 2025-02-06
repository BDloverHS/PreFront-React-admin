'use client'

import React from 'react'
import { styled } from 'styled-components'
import colors from '../../styles/colors'
const { dark, light } = colors

const StyleFooter = styled.footer`
  background: ${dark};
  min-height: 200px;
  color: ${light};
`

const Footer = () => {
  return (
    <StyleFooter>
      <div className="layout-width">사이트 하단 영역</div>
    </StyleFooter>
  )
}

export default React.memo(Footer)
