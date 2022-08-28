import React from 'react'
import { view_expenses } from '../utility'

export default function ViewModal({ id, title }) {
  return (
    <div
      className="modal fade"
      id={'viewModal' + id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <table className="table">
              <thead className="thead-light bg-dark text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Caption</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {view_expenses(title) != null ? (
                  view_expenses(title).map((expense, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{expense.caption}</td>
                        <td>{expense.amount}</td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <th scope="row">-</th>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
