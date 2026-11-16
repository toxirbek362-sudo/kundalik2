function points(games) {
  let a = 0
  for(key of games) {
    let game1 = key.split(":")
    let ourScore = +game1.slice(0, 1)
    let theirScore = +game1.slice(-1)
    if(ourScore > theirScore) {
      a += 3
    } else if(ourScore == theirScore) {
      a += 1
    } else {
      a += 0
    }
  }
  return a
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))