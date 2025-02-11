'use client'
import React from 'react'
import loadable from '@loadable/component'
import { MainTitle } from '@/app/global/components/StyledTitle'
import WithUserContainer from '@/app/global/containers/WithUserContainer'

const ConfigContainer = loadable(
  () => import('../../containers/ConfigContainer'),
)

// params = 경로변수인 bid
const EditPage = ({ params }) => {
  const { bid } = React.use<{ bid: string }>(params)

  return WithUserContainer(
    <>
      <MainTitle>게시판 수정</MainTitle>
      <ConfigContainer bid={bid} />
    </>,
  )
}

export default React.memo(EditPage)
