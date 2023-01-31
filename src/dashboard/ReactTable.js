import React from 'react';
import { useTable, useSortBy } from 'react-table';

function MyTable({ columns, data }) {
  // Use the useTable hook to create the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  // Render the table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// Define the columns for the table
const columns = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Edit',
    accessor: 'edit',
    Cell: ({ row }) => (
      <button onClick={() => console.log(row.original)}>Edit</button>
    )
  }
];

// Define the data for the table
const data = [
  {
    name: 'John',
    age: 30,
    edit: ''
  },
  {
    name: 'Jane',
    age: 35,
    edit: ''
  }
];

function App() {
  return <MyTable columns={columns} data={data} />;
}

export default App;