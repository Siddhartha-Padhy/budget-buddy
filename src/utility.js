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

export function get_color(amount, limit) {
  if (amount / limit <= 0.5) return 'bg-success'
  if (amount / limit <= 0.75) return 'bg-warning'
  return 'bg-danger'
}

// Add to local storage
export function add_expense(title, id) {
  const caption = document.getElementById(`caption${id}`).value
  const amount = parseInt(document.getElementById(`amount${id}`).value)

  if (localStorage[title] != null) {
    let prev = JSON.parse(localStorage[title])
    prev = [...prev, { caption: caption, amount: amount }]
    localStorage[title] = JSON.stringify(prev)
  } else {
    let store = [{ caption: caption, amount: amount }]
    store = JSON.stringify(store)
    localStorage[title] = store
  }
}

// Return expenses array
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

export function get_total_amountNlimit(budgets) {
  let amount = 0
  let limit = 0
  for (let budget of budgets) {
    if (localStorage[budget.bname] != null) {
      for (let expense in JSON.parse(localStorage[budget.bname])) {
        amount = amount + JSON.parse(localStorage[budget.bname])[expense].amount
      }
    }
    limit = limit + budget.limit
  }

  return { amount: amount, limit: limit }
}

export function add_budget() {
  const bname = document.getElementById('bname').value
  const limit = parseInt(document.getElementById('limit').value)
  if (localStorage['Budgets'] != null) {
    let prev = JSON.parse(localStorage['Budgets'])
    prev = [...prev, { bname: bname, limit: limit }]
    localStorage['Budgets'] = JSON.stringify(prev)
  } else {
    let store = [{ bname: bname, limit: limit }]
    store = JSON.stringify(store)
    localStorage['Budgets'] = store
  }
}

export function get_budgets() {
  if (localStorage['Budgets'] != null) {
    let budget_list = JSON.parse(localStorage['Budgets'])
    console.log(budget_list)
    return budget_list
  }
  return [
    { bname: 'Card Bills', limit: 20000 },
    { bname: 'Medical Bills', limit: 10000 },
    { bname: 'Shopping', limit: 10000 },
    { bname: 'Unexpected', limit: 5000 },
  ]
}
