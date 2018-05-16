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
function calculatesFarePrice(start, destination) {
  if(distanceTravelledInFeet(start, destination) > 400) {
  return 0
// } elsif (distanceTravelledInFeet(someValue, endValue) > 2000) {
//   return (1600 - (distanceTravelledInFeet(someValue, endValue))*2
//   } elsif (distanceTravelledInFeet(someValue, endValue) > 2000) {
//     return 25
//   } else {
//     return 'cannot travel that far'
// }
}
}
