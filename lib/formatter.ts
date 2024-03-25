// create a function that takes a date and formats it like 11-24-2023

export function formatDate(date: Date) {
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
}