import React from 'react'

function History() {
  return (
   <>
   <div className='p-5'>
    <h1>Watch history</h1>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Video ID</th>
          <th>Title</th>
          <th>Video URL</th>
          <th>Date and Time</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <td>1</td>
        <th>heeriye</th>
        <th>https://www.youtube.com/watch?v=RLzC55ai0eo</th>
        <td>2024-08-24</td>
        <td>
          <button className='btn'>
          <i className="fa-solid fa-trash" style={{color: "#d31d26",}} />
          </button>
        </td>
      </tbody>

    </table>

   </div>
   </>
  )
}

export default History