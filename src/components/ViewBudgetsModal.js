import { useContext } from 'react'
import { currency_formatter } from '../utility.js'
import { UpdateContext } from '../pages/HomePage.js'

export default function ViewBudgetsModal() {
  const { setUpdate, budgets } = useContext(UpdateContext)

  //Update the expenses list when element is deleted
  function update_budgets(id) {
    let prev = JSON.parse(localStorage['Budgets'])
    localStorage.removeItem(prev[id].bname)
    prev.splice(id, 1)
    localStorage['Budgets'] = JSON.stringify(prev)
    setUpdate(true)
  }

  return (
    <div
      className="modal fade"
      id="view-budgets-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Budgets</h5>
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
                  <th scope="col">Budget</th>
                  <th scope="col">Limit</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>

              <tbody id="budgets-table">
                {budgets != null ? (
                  budgets.map((key, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{key.bname}</td>
                        <td>{currency_formatter.format(key.limit)}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              update_budgets(index)
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
