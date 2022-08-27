import React from 'react'
import Card from '../components/Card'

export default function HomePage() {
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-sm-6">
          <Card title={'Card Bills'} amount={4000} limit={10000} />
        </div>
        <div className="col-sm-6">
          <Card title={'Medical Bills'} amount={2000} limit={10000} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <Card title={'Shopping'} amount={3000} limit={10000} />
        </div>
        <div className="col-sm-6">
          <Card title={'Unexpected'} amount={800} limit={1000} />
        </div>
      </div>
    </div>
  )
}
