import React from 'react'
import Card from '../components/Card'

export default function HomePage() {
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-sm-6">
          <Card title={'Card Bills'} amount={200} limit={1000} />
        </div>
        <div className="col-sm-6">
          <Card title={'Medical Bills'} amount={200} limit={1000} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <Card title={'Shopping'} amount={200} limit={1000} />
        </div>
        <div className="col-sm-6">
          <Card title={'Unexpected'} amount={200} limit={1000} />
        </div>
      </div>
    </div>
  )
}
