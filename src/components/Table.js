import React from "react"; 

export default function Table({ headers, collection }) {
  return (
    <div className="shadow-md">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map( (key) => (
              <th key={key} scope="col" className="px-6 py-3">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          { collection().map( (row, index) => (
            <tr key={index} className="transition bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              { row.map ( (itemRow, index) => (
                <td key={index} className="px-6 py-4">
                  {itemRow}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
