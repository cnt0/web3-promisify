module.exports = function(f) {
  return new Promise(function(resolve, reject) {
    f(function(error, result) {
      if (error) { reject(error) } else { resolve(result) }
    })
  })
}
