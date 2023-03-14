const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calcTravelTime(travelObject) {
  const number = travelObject.destinationDistance / travelObject.speed;
  const hours = Math.floor(number);
  const minutes = Math.floor((number - hours) * 60);
  return `You wil arrive in ${hours} hours and ${minutes} minutes`;
}

const travelTime = calcTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
