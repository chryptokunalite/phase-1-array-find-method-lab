function firstWin(object){
    return object.result === "W"
}




function superbowlWin(record){
    let result = record.find(firstWin)
  return result ? result.year : undefined
}

