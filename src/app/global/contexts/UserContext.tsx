'use client'
import { createContext, useState, useEffect } from 'react'

const UserContext = createContext({
  state: { userInfo: undefined, isLogin: false, isAdmin: false },
  actions: {
    setUserInfo: undefined,
    setIsLogin: undefined,
    setIsAdmin: undefined,
  },
})

const UserProvider = ({ children, _userInfo }) => {
  /* const user = {
    email: 'user1@test.org',
    name: '이이름',
  } */

  const [userInfo, setUserInfo] = useState(_userInfo)

  /* 
  const [isLogin, setIsLogin] = useState(true)
  const [isAdmin, setIsAdmin] = useState(true)
   */
  const [isLogin, setIsLogin] = useState(_userInfo ? true : false)

  const [isAdmin, setIsAdmin] = useState(
    _userInfo && _userInfo._authorities.includes('ADMIN'),
  )

  useEffect(() => {
    if (_userInfo) {
      setUserInfo(_userInfo)
    }
  }, [_userInfo])

  const value = {
    state: { userInfo, isLogin, isAdmin },
    actions: { setUserInfo, setIsLogin, setIsAdmin },
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const { Consumer: UserConsumer } = UserContext

export { UserProvider, UserConsumer }

export default UserContext
