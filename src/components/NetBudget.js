import React from 'react'
import { currency_formatter, get_color } from '../utility'
import NewBudgetModal from './NewBudgetModal'
import ViewBudgetsModal from './ViewBudgetsModal'

export default function NetBudget({ amount, limit }) {
  return (
    <>
      <div className="card my-2 border-primary shadow bg-dark text-white">
        <div className="card-body">
          <div className="d-flex">
            <h5 className="card-title me-auto my-auto">Total Budget</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {currency_formatter.format(amount)} /&nbsp;
              {currency_formatter.format(limit)}
            </h6>
          </div>
          <div className="progress rounded-pill my-1">
            <div
              className={
                'progress-bar progress-bar-striped ' + get_color(amount, limit)
              }
              role="progressbar"
              style={{
                width: (amount / limit) * 100 + '%',
              }}
              aria-valuenow={amount}
              aria-valuemin="0"
              aria-valuemax={limit}
            ></div>
          </div>
          <button
            className="btn btn-outline-primary m-1"
            data-toggle="modal"
            data-target="#budget-modal"
          >
            New Budget
          </button>
          <button
            className="btn btn-outline-danger m-1"
            data-toggle="modal"
            data-target="#view-budgets-modal"
          >
            Remove Budget
          </button>
        </div>
      </div>
      <NewBudgetModal />
      <ViewBudgetsModal />
    </>
  )
}
