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
  return distanceFromHqInBlocks(endValue)*264 - distanceFromHqInBlocks(someValue)*264
}
