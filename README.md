## A fully typed Tbilisi Transport Company API Wrapper

### [Methods/Endpoints](docs/modules/ttc.md)

### Usage

```typescript
import ttc from "ttc-api";

ttc.stopArrivalTimes("1946").then((arrivalTimes) => {
  for (const at of arrivalTimes) {
    console.log(at.ArrivalTime, at.RouteNumber);
  }
});
```
