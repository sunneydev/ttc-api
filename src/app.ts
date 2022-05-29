import ttc from "./ttc";

ttc.stopArrivalTimes("1946").then((arrivalTimes) => {
  for (const at of arrivalTimes) {
    console.log(at.ArrivalTime, at.RouteNumber);
  }
});
