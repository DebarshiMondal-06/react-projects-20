import React from 'react'

const PendingRequests = () => {



  return <section className="table-responsive mt-4">
    <table className="table text-center table-borderless  table-hover">
      <thead className="table--head">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Ticket ID</th>
          <th scope="col">Assigned To</th>
          <th scope="col">Status</th>
          <th scope="col">Assigned To</th>
        </tr>
      </thead>
      <tbody className="table--body text-capitalize">
        <tr>
          <td>1</td>
          <td>Wow momo</td>
          <td>#339090</td>
          <td>Manager</td>
          <td>Pending</td>
          <td>Manager</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Wow momo</td>
          <td>#339090</td>
          <td>Manager</td>
          <td>Pending</td>
          <td>Manager</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Wow momo</td>
          <td>#339090</td>
          <td>Manager</td>
          <td>Pending</td>
          <td>Manager</td>
        </tr>
      </tbody>
    </table>
  </section >
}

export default PendingRequests
