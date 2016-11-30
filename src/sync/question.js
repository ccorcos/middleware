
// I want you to build a typical express middleware

const use = require('./answer')

const log = (value, next) => {
  console.log('before:', value)
  const after = next(value)
  console.log('after:', after)
  return after
}

const inc = (value, next) => {
  return next(value + 1)
}

const start = use([
  log,
  inc,
  log,
])

start(1)

// ❯❯❯ node --harmony-async-await sync/question.js
// before: 1
// before: 2
// after: 2
// after: 2
