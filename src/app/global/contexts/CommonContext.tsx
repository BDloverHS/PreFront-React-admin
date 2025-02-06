'use client'

import { createContext, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

type ContextType = {
  state?: { title?: string }
  actions?: { setTitle?: (title: string) => void }
}

const CommonContext = createContext<ContextType>({})

const CommonProvider = ({ children }) => {
  const [title, setTitle] = useState<string | undefined>()

  const value = {
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
