import React from 'react'
import styled from 'styled-components'
import type { CommonType } from '@/app/global/types/styledType'
import { TableCols } from '@/app/global/components/Tables'
import { Input, Select } from '@/app/global/components/FormComponents'
import { BigButton } from '@/app/global/components/Buttons'
import { FaSearch } from 'react-icons/fa'

const StyledForm = styled.form<CommonType>`
  margin-bottom: 35px;

  button[type='submit'] {
    display: block;
    margin: 15px auto 0;
  }

  th {
    width: 180px;
  }

  .flex {
    display: flex;

    select {
      margin-right: 5px;
    }

    select + input {
      flex-grow: 1;
    }
  }
`

const options = [
  { value: 'ALL', label: '통합검색' },
  { value: 'BID', label: '게시판 ID' },
  { value: 'NAME', label: '게시판 이름' },
]

const ConfigSearch = ({ form, onChange, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit} autoComplete="off">
      <TableCols>
        <tbody>
          <tr>
            <th>키워드</th>
            <td className="flex">
              <Select
                name="sopt"
                options={options}
                selected={form?.sopt ?? 'ALL'}
                onChange={onChange}
                width={180}
              />
              <Input
                type="text"
                name="skey"
                value={form?.skey ?? ''}
                onChange={onChange}
              />
            </td>
          </tr>
        </tbody>
      </TableCols>
      <BigButton type="submit" color="primary" width={250}>
        <FaSearch />
        검색하기
      </BigButton>
    </StyledForm>
  )
}

export default React.memo(ConfigSearch)
