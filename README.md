## A fully typed Tbilisi Transport Company API Wrapper

### [Methods/Endpoints](docs/modules/ttc.md)

### Installation

```bash
# npm
$ npm install ttc-api

# yarn
$ yarn add ttc-api

# pnpm
$ pnpm add ttc-api
```

### Usage

```typescript
import ttc from "ttc-api";

ttc.stopArrivalTimes("1946").then((arrivalTimes) => {
  for (const at of arrivalTimes) {
    console.log(at.ArrivalTime, at.RouteNumber);
  }
});
```
