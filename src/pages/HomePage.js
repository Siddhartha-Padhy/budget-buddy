import React from 'react'
import Card from '../components/Card'
// import React, { useEffect, useState } from 'react'

export default function HomePage() {
  // const [cardBill, setCardBill] = useState(0)
  // const [medBill, setMedBill] = useState(0)
  // const [shop, setShop] = useState(0)
  // const [unexp, setUnexp] = useState(0)

  // useEffect(() => {
  //   setCardBill(get_stats('Card'))
  // }, [])

  return (
    <div className="p-4">
      <div className="row">
        <div className="col-sm-6">
          <Card title={'Card Bills'} amount={8000} limit={20000} id={0} />
        </div>
        <div className="col-sm-6">
          <Card title={'Medical Bills'} amount={5500} limit={10000} id={1} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <Card title={'Shopping'} amount={8000} limit={10000} id={2} />
        </div>
        <div className="col-sm-6">
          <Card title={'Unexpected'} amount={1200} limit={5000} id={3} />
        </div>
      </div>
    </div>
  )
}
