import React from 'react'
import { add_expense } from '../utility'

export default function Modal({ id, title }) {
  return (
    <div
      className="modal fade"
      id={'modal' + id}
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
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Caption</label>
                <input
                  type="text"
                  className="form-control caption"
                  id={'caption' + id}
                  placeholder="Caption"
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  className="form-control amount"
                  id={'amount' + id}
                  placeholder="0"
                />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              id="add_exp"
              className="btn btn-primary"
              onClick={() => add_expense(title, id)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
