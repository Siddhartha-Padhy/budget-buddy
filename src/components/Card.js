import React from 'react'
import { currency_formatter } from '../utility'

export default function Card({ title, amount, limit }) {
  return (
    <div class="card my-2 border-primary shadow">
      <div class="card-body">
        <div className="d-flex">
          <h5 class="card-title me-auto my-auto">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {currency_formatter.format(amount)} /&nbsp;
            {currency_formatter.format(limit)}
          </h6>
        </div>

        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button class="btn btn-outline-primary m-1">Add Expense</button>
        <button class="btn btn-outline-primary m-1">View Expenses</button>
      </div>
    </div>
  )
}
