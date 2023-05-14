[ttc-api](../README.md) / ttc

# Module: ttc

## Table of contents

### Variables

- [ttc](ttc.md#ttc)

## Variables

### ttc

• `Const` **ttc**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `busLiveLocations` | (`routeNumber`: `string`, `forward`: `boolean`) => `Promise`<[`BusLiveInfo`](../interfaces/types.BusLiveInfo.md)[]\> |
| `busRouteInfo` | (`routeNumber`: `string`, `forward`: `boolean`) => `Promise`<[`RouteInfo`](../interfaces/types.RouteInfo.md)\> |
| `busRoutes` | () => `Promise`<[`BusRoute`](types.md#busroute)[]\> |
| `routes` | () => `Promise`<[`Route`](../interfaces/types.Route.md)[]\> |
| `stopArrivalTimes` | (`stopId`: `string`) => `Promise`<[`ArrivalInfo`](../interfaces/types.ArrivalInfo.md)[]\> |
| `stopInfo` | (`stopId`: `string`) => `Promise`<[`StopInfo`](../interfaces/types.StopInfo.md)\> |
| `stopRoutes` | (`stopId`: `string`) => `Promise`<[`StopRoute`](../interfaces/types.StopRoute.md)[]\> |
| `stops` | () => `Promise`<[`Stop`](../interfaces/types.Stop.md)[]\> |

#### Defined in

[ttc.ts:24](https://github.com/sunneydev/ttc-api/blob/72acd1f/src/ttc.ts#L24)
