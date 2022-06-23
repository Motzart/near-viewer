import React from 'react';
import { useTable } from 'react-table';
import { format } from 'timeago.js';
import { ITx } from '~services/api';

type Props = {
  txs: ITx[]
}

export const TxTable = (props: Props) => {
  const { txs } = props;

  const columns = React.useMemo(
    () => [
      {
        Header: 'Txn Hash',
        accessor: 'transaction_hash',
      },
      {
        Header: 'Method',
        accessor: 'type',
      },
      {
        Header: 'Age',
        accessor: 'block_timestamp',
        Cell: props => new Date(props.value/1000000).toLocaleDateString(),
      },
      {
        Header: 'From',
        accessor: 'from',
      },
      {
        Header: 'To',
        accessor: 'to',
      },
    ], []
  )

  const data = React.useMemo(() => txs, [])

  return (
    <Table columns={columns} data={data} />
  )

}

const Table = ({columns, data}: Record<any, any>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <table className="table table-bordered" {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

