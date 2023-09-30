function combineArrays(a, b, ka, kb, kr) {
  a.forEach(function(item) {
    item[kr] = null
    var FIND = b.find(function(jtem) {
      return jtem[kb] == item[ka]
    })
    try {
      item[kr] = FIND[kr]

    } catch (err) {

    }
  })
}
