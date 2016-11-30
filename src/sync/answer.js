// module.exports = (wares) => (value) => {
//   const last = wares.length - 1
//   const nexts = wares
//     .map((ware, i) => {
//       if (i === last) {
//         return (v) => ware(v, (value) => value)
//       } else {
//         return (v) => ware(v, nexts[i+1])
//       }
//     })
//   nexts[0](value)
// }

module.exports = (wares) => (value) => {
  const last = wares.length - 1
  const nexts = wares
    .map((ware, i) => {
      if (i === last) {
        return (v) => ware(v, (value) => value)
      } else {
        return (next) => (v) => ware(v, next)
      }
    })
    .reverse()
    .reduce((next, prev) => prev(next))(value)
}