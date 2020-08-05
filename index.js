const {fetchMyIP,fetchCoordsByIP, fetchISSFlyOverTimes,nextISSTimesForMyLocation} = require('./iss');

fetchMyIP((err,ip) => {
  // we expect no error for this scenario
  if (!err) {
    console.log(ip);
  } else {
    console.log(err);
  }

  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      let outPut = `Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!`;
      console.log("It didn't work!" , error);
      return;
    }
  
    console.log('It worked! Returned Coords:' , coords);
  });

});


fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   printPassTimes(passTimes);
// });