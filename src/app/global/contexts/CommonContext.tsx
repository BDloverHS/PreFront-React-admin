'use client'
import { createContext, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { setDefaultLocale } from 'react-datepicker'
import { ko } from 'date-fns/locale'
import loadable from '@loadable/component'
import useUser from '../hook/useUser'

const Side = loadable(() => import('../ui/outlines/Side'))

setDefaultLocale(ko)

type ContextType = {
  state?: { title?: string; menuCode: string }
  actions?: { setTitle?: (title: string) => void }
}

const CommonContext = createContext<ContextType>({})

const CommonProvider = ({ children }) => {
  const { isAdmin } = useUser()
  const [title, setTitle] = useState<string | undefined>()

  const value: ContextType = {
    state: { title },
    actions: { setTitle },
  }

  return (
    <CommonContext.Provider value={value}>
      <HelmetProvider>
        <>
          <Helmet>{title && <title>{title}</title>}</Helmet>
          {children}
        </>
      </HelmetProvider>
    </CommonContext.Provider>
  )
}

const { Consumer: CommonConsumer } = CommonContext

export { CommonProvider, CommonConsumer }

export default CommonContext
