// Convert integers to currency
export const currency_formatter = new Intl.NumberFormat(undefined, {
  currency: 'inr',
  style: 'currency',
  minimumFractionDigits: 0,
})
