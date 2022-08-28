import React, { useEffect, useState } from 'react'
import { currency_formatter_USD } from '../utility'

function MarketPage() {
  const [stocks, setStocks] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchStocks() {
    let res = await fetch('https://api.coincap.io/v2/assets')
      .then((data) => data.json())
      .then((result) => result.data)

    setStocks(res)
    setLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      fetchStocks()
    }, 2000)
  }, [])

  return (
    <table className="table table-light stock-table">
      <thead>
        <tr className="text-primary">
          <th scope="col">#</th>
          <th scope="col">Ticker</th>
          <th scope="col">Stock</th>
          <th scope="col">Price</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <th scope="row">-</th>
            <td className="text-warning">Loading...</td>
            <td className="text-warning">Loading...</td>
            <td className="text-warning">Loading...</td>
            <td className="text-warning">Loading...</td>
          </tr>
        ) : (
          stocks.map((stock) => {
            return (
              <tr key={stock.rank}>
                <th scope="row">{stock.rank}</th>
                <td>{stock.symbol}</td>
                <td>{stock.name}</td>
                <td>
                  {stock.changePercent24Hr > 0 ? (
                    <i
                      className="fa fa-arrow-up text-success"
                      aria-hidden="true"
                    ></i>
                  ) : (
                    <i
                      className="fa fa-arrow-down text-danger"
                      aria-hidden="true"
                    ></i>
                  )}
                  &nbsp;
                  {currency_formatter_USD.format(stock.priceUsd)}
                </td>
                <td>
                  <a href={stock.explorer} className="btn btn-sm btn-primary">
                    View
                  </a>
                </td>
              </tr>
            )
          })
        )}
      </tbody>
    </table>
  )
}

export default MarketPage
