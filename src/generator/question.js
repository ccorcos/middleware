// WIP

// generator middleware
const log = function* (value, gen) => {
  console.log('before:', value)
  let after = yield gen.next(value)
  while (!after.done) {
    console.log('after:', after.value)
    after = yield gen.next(after.value)
  }
}

Promise.delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const delay = async (value, gen) => {
  const time1 = Date.now()
  await Promise.delay(1000)
  console.log('waited:', Date.now() - time1)
  const after = await next(value)
  const time2 = Date.now()
  await Promise.delay(2000)
  console.log('waited:', Date.now() - time2)
  return after
}

const inc = function (value, next) {
  return next(value + 1)
}

const use = (wares) => (value) => {
  const last = wares.length - 1
  const nexts = wares
    .map((ware, i) => {
      if ()
      if (i === last) {
        return function* (v) {

        }()
        return (v) => Promise.resolve().then(() => ware(v, async (value) => value))
      } else {
        return (v) => Promise.resolve().then(() => ware(v, nexts[i+1]))
      }
    })
  nexts[0](value)
}
const start = use([
  log,
  inc,
  log,
])

console.log([...start(1)][0])
