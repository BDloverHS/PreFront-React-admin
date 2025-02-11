'use client'

import React, { useState, useCallback, useEffect } from 'react'
import ConfigList from '../components/ConfigList'
import useMenuCode from '@/app/global/hooks/useMenuCode'
import ConfigSearch from '../components/ConfigSearch'
import { toQueryString } from '@/app/global/libs/utils'
import useRequest from '@/app/global/hooks/useRequest'
import { BulletList } from 'react-content-loader'
import Pagination from '@/app/global/components/Pagination'

const Loading = () => <BulletList />

type SearchType = {
  sopt?: string
  skey?: string
  page?: number
  limit?: number
}

const ConfigListContainer = () => {
  useMenuCode('board', 'configList')
  const [search, setSearch] = useState<SearchType>({})
  const [_search, _setSearch] = useState<SearchType>({})
  const [items, setItems] = useState([])
  const [pagination, setPagination] = useState()

  const qs = toQueryString(search)

  const { data, error, isLoading } = useRequest(
    `/board/api/config/list${qs.trim() ? '?' + qs : ''}`,
  )

  useEffect(() => {
    if (data) {
      setItems(data.data.items)
      setPagination(data.data.pagination)
    }
  }, [data])

  const onChange = useCallback((e) => {
    _setSearch((_search) => ({ ..._search, [e.target.name]: e.target.value }))
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      setSearch(_search)
    },
    [_search],
  )

  const onPageClick = useCallback((page) => {
    page = page ?? 1
    setSearch((search) => ({ ...search, page }))
  }, [])

  return (
    <>
      <ConfigSearch form={_search} onChange={onChange} onSubmit={onSubmit} />
      {isLoading ? <Loading /> : <ConfigList />}
      {pagination && (
        <Pagination pagination={pagination} onClick={onPageClick} />
      )}
    </>
  )
}

export default React.memo(ConfigListContainer)
