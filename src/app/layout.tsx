import StyledComponentsRegistry from './registry'
import Header from './global/ui/outlines/Header'
import { CommonProvider } from './global/contexts/CommonContext'
import { Metadata } from 'next'
import { getUserInfo } from './member/services/actions'
import { UserProvider } from './global/contexts/UserContext'
import 'react-datepicker/dist/react-datepicker.css'
import './globals.css'
import Side from './global/ui/outlines/Side'

export const metadata: Metadata = {
  title: '관리자 페이지',
  description: '설명...',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const userInfo = await getUserInfo()
  console.log('userInfo', userInfo)
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <UserProvider _userInfo={userInfo}>
            <Header />
            <main>
              <Side />
              <CommonProvider>
                <main className="main-content">{children}</main>
              </CommonProvider>
            </main>
          </UserProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
