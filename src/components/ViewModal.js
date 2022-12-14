import { useContext } from 'react'
import { currency_formatter } from '../utility.js'
import { UpdateContext } from '../pages/HomePage.js'

export default function ViewModal({ id, title }) {
  const { setUpdate, data } = useContext(UpdateContext)

  //Update the expenses list when element is deleted
  function update_data(title, id) {
    let prev = JSON.parse(localStorage[title])
    prev.splice(id - 1, 1)
    localStorage[title] = JSON.stringify(prev)
    setUpdate(true)
  }

  return (
    <div
      className="modal fade"
      id={'viewModal' + id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <table className="table">
              <thead className="thead-light bg-dark text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Caption</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody id={'expense-table-' + id}>
                {data[id] != null ? (
                  data[id].expenses.map((key, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{key.id}</th>
                        <td>{key.caption}</td>
                        <td>{currency_formatter.format(key.amount)}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              update_data(data[id].title, key.id)
                            }}
                          >
                            <i
                              className="fa fa-times text-white"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <th scope="row">-</th>
                    <td>-</td>
                    <td>-</td>
                    <td className="text-center">-</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
