const sum = (a) => {
  if (a.length === 0)
    return 0
  else
    return a[0] + sum(a.slice(1))
}

module.exports = {sum: sum}
