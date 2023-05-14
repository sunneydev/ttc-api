## A fully typed Tbilisi Transport Company API Wrapper

### [Documentation](docs/modules/ttc.md)

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
import { ttc } from "ttc-api";

const arrivalTimes = await ttc.stopArrivalTimes("1946").then((arrivalTimes) => {

for (let at of arrivalTimes) {
  console.log(`${at.RouteNumber} arrives in ${at.ArrivalTime} minutes`);
}
```
