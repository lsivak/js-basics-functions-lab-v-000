function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
return someValue - 42
} else {
  return 42 - someValue
}
}
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue)*264
}
function distanceTravelledInFeet(someValue, endValue) {
  const distance = distanceFromHqInBlocks(endValue)*264 - distanceFromHqInBlocks(someValue)*264 
  return distance
}
