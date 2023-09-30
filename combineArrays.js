function combineArrays(a, b, ka, kb, kr) {
	a.forEach(function(item) {
    	item[kr] = null
  	b.forEach(function(jtem) {
    	if (item[ka] == jtem[kb]) {
      	item[kr] = jtem[kr]
      }
    })
  })
}
