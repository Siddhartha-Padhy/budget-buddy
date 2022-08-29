import { useState, useContext, useEffect } from 'react'
import { get_expenses } from '../utility'
import { UpdateContext } from '../pages/HomePage.js'

export default function ViewModal({ id, title }) {
  const { update, setUpdate, data } = useContext(UpdateContext)
  useEffect(() => {
    if (data[id] != null) {
      for (let key of data[id].expenses) {
        document.getElementById(
          `expense-table-${id}`,
        ).innerHTML += `<tr key={index}>
          <th scope="row">${key.id}</th>
          <td>${key.caption}</td>
          <td>${key.amount}</td>
        </tr>`
      }
    }
  }, [data])

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
              <tbody id={'expense-table-' + id}>
                {/* {view_expenses(title) != null ? (
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
                )} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
