// Convert integers to currency
export const currency_formatter = new Intl.NumberFormat(undefined, {
  currency: 'inr',
  style: 'currency',
  minimumFractionDigits: 0,
})

export const currency_formatter_USD = new Intl.NumberFormat(undefined, {
  currency: 'usd',
  style: 'currency',
  minimumFractionDigits: 2,
})
