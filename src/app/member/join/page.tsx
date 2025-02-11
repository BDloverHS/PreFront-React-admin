'use client'
import JoinContainer from '../containers/JoinContainer'
import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import WithGuestContainer from '@/app/global/containers/WithGuestContainer'

const JoinPage = () => {
  return WithGuestContainer(
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle>회원 가입</MainTitle>
        <JoinContainer />
      </MainContentBox>
    </>,
  )
}

export default JoinPage
