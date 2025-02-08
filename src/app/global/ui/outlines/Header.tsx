'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { styled } from 'styled-components'
import { SlLogin, SlLogout } from 'react-icons/sl'
import { FaUserPlus, FaHome } from 'react-icons/fa'
import classNames from 'classnames'
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'
import logo from '../../assets/images/logo.png'
import useUser from '../../hooks/useUser'

const { light } = colors
const { big } = sizes

const StyledHeader = styled.header`
  &.line {
    border-bottom: 1px solid ${light};
  }

  .site-top {
    background: ${light};
    height: 45px;

    .layout-width {
      display: flex;
      justify-content: space-between;

      & > div {
        display: flex;
        align-items: center;
        height: 45px;

        a + a {
          margin-left: 10px;
        }
      }

      svg {
        font-size: ${big};
      }
    }
  }

  .logo-search {
    .layout-width {
      display: flex;
      justify-content: space-between;
      height: 100px;
      align-items: center;
    }
  }
`

const Header = () => {
  const { userInfo, isLogin, isAdmin } = useUser()
  const email = userInfo?.email
  const name = userInfo?.name

  return (
    <StyledHeader className={classNames({ line: isAdmin })}>
      <div className="site-top">
        <div className="layout-width">
          <div className="left">
            <Link href="/">
              <FaHome />
            </Link>
          </div>
          <div className="right">
            {isLogin ? (
              <>
                {name}({email})님,
                <a href="/member/api/logout">
                  <SlLogout /> 로그아웃
                </a>
              </>
            ) : (
              <>
                <a href="/member/join">
                  <FaUserPlus /> 회원가입
                </a>
                <a href="/member/login">
                  <SlLogin /> 로그인
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      {/* site-top */}
      <div className="logo-search">
        <div className="layout-width">
          <Link href="/" className="logo">
            <Image src={logo} alt="로고" priority={true} />
          </Link>
        </div>
      </div>
      {/* logo-search */}
    </StyledHeader>
  )
}

export default React.memo(Header)
