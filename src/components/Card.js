import React from 'react'
import { currency_formatter } from '../utility'
import Modal from './Modal'

export default function Card({ title, amount, limit, id }) {
  function get_color(amount, limit) {
    if (amount / limit <= 0.5) return 'bg-success'
    if (amount / limit <= 0.75) return 'bg-warning'
    return 'bg-danger'
  }

  return (
    <>
      <div className="card my-2 border-primary shadow">
        <div className="card-body">
          <div className="d-flex">
            <h5 className="card-title me-auto my-auto">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {currency_formatter.format(amount)} /&nbsp;
              {currency_formatter.format(limit)}
            </h6>
          </div>

          <div className="card-text">
            <div className="progress my-1">
              <div
                className={
                  'progress-bar progress-bar-striped rounded-pill ' +
                  get_color(amount, limit)
                }
                role="progressbar"
                style={{ width: (amount / limit) * 100 + '%' }}
                aria-valuenow={amount}
                aria-valuemin="0"
                aria-valuemax={limit}
              ></div>
            </div>
          </div>
          <button
            className="btn btn-outline-primary m-1"
            data-toggle="modal"
            data-target={'#modal' + id}
          >
            Add Expense
          </button>
          <button className="btn btn-outline-primary m-1">View Expenses</button>
        </div>
      </div>

      <Modal id={id} title={title} />
    </>
  )
}
