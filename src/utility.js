// Convert integer to inr currency
export const currency_formatter = new Intl.NumberFormat(undefined, {
  currency: 'inr',
  style: 'currency',
  minimumFractionDigits: 0,
})

// Convert integer to usd currency
export const currency_formatter_USD = new Intl.NumberFormat(undefined, {
  currency: 'usd',
  style: 'currency',
  minimumFractionDigits: 2,
})

// Add to local storage
export function add_expense(title, id) {
  const caption = document.getElementById(`caption${id}`).value
  const amount = parseInt(document.getElementById(`amount${id}`).value)

  if (localStorage[title] != null) {
    let prev = JSON.parse(localStorage[title])
    // prev[caption] = amount
    // localStorage[title] = JSON.stringify(prev)
    prev = [...prev, { caption: caption, amount: amount }]
    localStorage[title] = JSON.stringify(prev)
  } else {
    let store = [{ caption: caption, amount: amount }]
    store = JSON.stringify(store)
    localStorage[title] = store
  }
}

// Return expenses array
// TODO: if doesn't work revert to github prev commit
export function get_expenses(budgets) {
  let expenses = []
  let budget_expenses = []
  let count = 1

  for (let key of budgets) {
    if (localStorage[key] != null) {
      for (let expense of JSON.parse(localStorage[key])) {
        expenses.push({
          id: count,
          caption: expense.caption,
          amount: expense.amount,
        })
        count = count + 1
      }
      count = 1
    }
    budget_expenses.push({ title: key, expenses: expenses })
    expenses = []
  }

  return budget_expenses
}

export function get_amount(title) {
  let amount = 0
  if (localStorage[title] != null) {
    for (let expense in JSON.parse(localStorage[title])) {
      amount = amount + JSON.parse(localStorage[title])[expense].amount
    }
  }
  return amount
}
