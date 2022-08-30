import React, { useEffect, useState, createContext, useReducer } from 'react'
import Card from '../components/Card'
import NetBudget from '../components/NetBudget'
import {
  get_amount,
  get_budgets,
  get_expenses,
  get_total_amountNlimit,
} from '../utility'

export const UpdateContext = createContext()

export default function HomePage() {
  const [update, setUpdate] = useState(false)
  const [data, setData] = useState({})
  const [totalAmountNLimit, setTotalAmountNLimit] = useState({
    amount: 0,
    limit: 0,
  })
  const [budgets, setBudgets] = useState([
    { bname: 'Card Bills', limit: 20000 },
    { bname: 'Medical Bills', limit: 10000 },
    { bname: 'Shopping', limit: 10000 },
    { bname: 'Unexpected', limit: 5000 },
  ])

  function reducer(state) {
    return {
      budgets: setBudgets(get_budgets()),
      data: setData(
        get_expenses(
          budgets.map((b) => {
            return b.bname
          }),
        ),
      ),
      totalAmountNLimit: setTotalAmountNLimit(get_total_amountNlimit(budgets)),
    }
  }

  const initial = {
    budgets: [],
    data: [],
    totalAmountNLimit: { amount: 0, limit: 0 },
  }

  const [state, dispatch] = useReducer(reducer, initial)

  useEffect(() => {
    dispatch()
    setUpdate(false)
  }, [update])

  return (
    <UpdateContext.Provider value={{ update, setUpdate, data, budgets }}>
      <div className="px-4 py-2">
        <NetBudget
          amount={totalAmountNLimit.amount}
          limit={totalAmountNLimit.limit}
        />
        <div className="row">
          {budgets.map((budget, index) => {
            return (
              <div className="col-sm-6" key={index}>
                <Card
                  title={budget.bname}
                  amount={get_amount(budget.bname)}
                  limit={budget.limit}
                  id={index}
                />
              </div>
            )
          })}
        </div>
      </div>
    </UpdateContext.Provider>
  )
}
