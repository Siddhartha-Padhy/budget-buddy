import React from 'react'
import { currency_formatter, get_color } from '../utility'
import Modal from './Modal'
import ViewModal from './ViewModal'

export default function Card({ title, amount, limit, id }) {
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
            <div className="progress rounded-pill my-1">
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
          <button
            className="btn btn-outline-primary m-1"
            data-toggle="modal"
            data-target={'#viewModal' + id}
          >
            View Expenses
          </button>
        </div>
      </div>

      <Modal id={id} title={title} />
      <ViewModal id={id} title={title} />
    </>
  )
}
