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
export function view_expenses(title) {
  let expenses = []
  if (localStorage[title] != null) {
    for (let expense in JSON.parse(localStorage[title])) {
      expenses.push({
        caption: JSON.parse(localStorage[title])[expense].caption,
        amount: JSON.parse(localStorage[title])[expense].amount,
      })
    }
    console.log(expenses)
    return expenses
  } else return null
}
