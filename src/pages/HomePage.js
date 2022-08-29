import React, { useEffect, useState, createContext } from 'react'
import Card from '../components/Card'
import { get_amount, get_expenses } from '../utility'

export const UpdateContext = createContext()

export default function HomePage() {
  const [update, setUpdate] = useState(false)
  const [data, setData] = useState({})
  const [budgets] = useState([
    'Card Bills',
    'Medical Bills',
    'Shopping',
    'Unexpected',
  ])

  useEffect(() => {
    setData(get_expenses(budgets))
    setUpdate(false)
  }, [update, budgets])

  return (
    <UpdateContext.Provider value={{ update, setUpdate, data }}>
      <div className="p-4">
        <div className="row">
          <div className="col-sm-6">
            <Card
              title={'Card Bills'}
              amount={get_amount('Card Bills')}
              limit={20000}
              id={0}
            />
          </div>
          <div className="col-sm-6">
            <Card
              title={'Medical Bills'}
              amount={get_amount('Medical Bills')}
              limit={10000}
              id={1}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Card
              title={'Shopping'}
              amount={get_amount('Shopping')}
              limit={10000}
              id={2}
            />
          </div>
          <div className="col-sm-6">
            <Card
              title={'Unexpected'}
              amount={get_amount('Unexpected')}
              limit={5000}
              id={3}
            />
          </div>
        </div>
      </div>
    </UpdateContext.Provider>
  )
}
