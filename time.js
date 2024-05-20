const date = new Date()
const currentYear = date.getFullYear()
const time = document.querySelector('time')

time.setAttribute('datetime', date)
time.innerHTML = currentYear
