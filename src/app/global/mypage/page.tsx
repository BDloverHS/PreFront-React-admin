import React from 'react'
import MypageContainer from './containers/MypageContainer'
import WithUserContainer from '../containers/withUserContainer'

const Mypage = () => {
  return WithUserContainer(MypageContainer)
}

export default React.memo(Mypage)
