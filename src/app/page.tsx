'use client'

import loadable from 'next/dist/shared/lib/loadable.shared-runtime'
import WithUserContainer from './global/containers/withUserContainer'

const MainContainer = loadable(() => import('./main/containers/MainContainer'))

const MainPage = () => {
  return WithUserContainer(MainContainer)
}

export default MainPage
