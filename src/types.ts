export enum Color {
  Ff505B = "ff505b",
  The117A65 = "117a65",
  The1F618D = "1f618d",
}

export enum Mode {
  Bus = "BUS",
  Subway = "SUBWAY",
}

export interface Route {
  Id: string;
  Type: TransportType;
  RouteNumber: string;
  Color: Color;
  StopA: string;
  StopB: string;
  RouteStops: unknown[];
  LongName?: string;
}

export type BusRoute = Route & {
  Type: TransportType.Bus;
};

export enum TransportType {
  Bus = "bus",
  Metro = "metro",
}

export interface Stop {
  id: string;
  code?: string;
  name: string;
  lat: number;
  lon: number;
  cluster?: string;
}

export interface StopInfo {
  id: string;
  name: string;
  lat: number;
  lon: number;
  code: string;
  locationType: number;
  wheelchairBoarding: number;
  vehicleType: number;
  vehicleTypeSet: boolean;
}

export interface StopRoute {
  id: string;
  shortName: string;
  longName?: string;
  mode: Mode;
  color: Color;
  agencyName: "თბილისის სატრანსპორტო კომპანია";
}

export interface RouteInfo {
  Id: string;
  Type: string;
  RouteNumber: string;
  LongName: string;
  Color: string;
  Shape: string;
  RouteStops: RouteStop[];
}

export interface RouteStop {
  StopId: string;
  Name: string;
  Forward: boolean;
  Lon: number;
  Lat: number;
  Sequence: number;
  Type: TransportType;
  HasBoard: boolean;
  Virtual: boolean;
  Routes: unknown[];
}

export interface ArrivalTimesResponse {
  ArrivalTime: ArrivalInfo[];
}

export interface ArrivalInfo {
  RouteNumber: string;
  DestinationStopName: string;
  ArrivalTime: number;
}

export interface BusesResponse {
  routeNumber: string;
  forward: boolean;
  lon: number;
  lat: number;
  nextStopId: string;
}

export interface BusesResponse {
  bus: BusLiveInfo[];
}

export interface BusLiveInfo {
  routeNumber: string;
  forward: boolean;
  lon: number;
  lat: number;
  nextStopId: string;
}
