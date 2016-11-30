// now I want you to handle async middleware

const use = require('./answer')

const log = async (value, next) => {
  console.log('before:', value)
  const after = await next(value)
  console.log('after:', after)
  return after
}

Promise.delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const delay = async (value, next) => {
  const time1 = Date.now()
  await Promise.delay(1000)
  console.log('waited:', Date.now() - time1)
  const after = await next(value)
  const time2 = Date.now()
  await Promise.delay(2000)
  console.log('waited:', Date.now() - time2)
  return after
}

const inc = async (value, next) => {
  return next(value + 1)
}

const start = use([
  log,
  inc,
  delay,
  log,
])

start(1)

// ❯❯❯ node --harmony-async-await async/question.js
// before: 1
// waited: 1003
// before: 2
// after: 2
// waited: 2004
// after: 2