import { useContext } from 'react'
import { UpdateContext } from '../pages/HomePage.js'
import { add_budget } from '../utility'

export default function NewBudgetModal() {
  const { setUpdate } = useContext(UpdateContext)

  return (
    <div
      className="modal fade"
      id="budget-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Budget</h5>
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
            <form>
              <div className="form-group">
                <label htmlFor="budgetName">Budget Name</label>
                <input
                  type="text"
                  className="form-control caption"
                  id="bname"
                  placeholder="Budget"
                />
              </div>
              <div className="form-group">
                <label htmlFor="limit">Limit</label>
                <input
                  type="number"
                  className="form-control amount"
                  id="limit"
                  placeholder="0"
                />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              id="add_bud"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => {
                add_budget()
                setUpdate(true)
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
