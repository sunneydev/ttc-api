export type LatLng = number[];
export type Locale = "ka" | "en";
export type BusMode = "BUS";
export type VehicleMode = "BUS" | "GONDOLA" | "SUBWAY";
export type BusColor = "0033B4" | "00B38B";

export interface BusStop {
  id: string;
  code: null | string;
  name: string;
  lat: number;
  lon: number;
  vehicleMode: VehicleMode;
}

export interface BusArrival {
  shortName: string;
  color: string;
  headsign: string;
  realtime: boolean;
  realtimeArrivalMinutes: number;
  scheduledArrivalMinutes: number;
}

export interface Bus {
  id: string;
  shortName: string;
  longName: string;
  color: BusColor;
  mode: BusMode;
}

export interface BusRouteFull {
  id: string;
  shortName: string;
  longName: string;
  color: string;
  mode: string;
  circular: boolean;
  longNames: {
    forwardLongName: string;
    backwardLongName: string;
  };
}

export interface BusLocation {
  lat: number;
  lon: number;
  heading: number;
  nextStopId?: string;
}

export interface BusPlan {
  from: From;
  to: From;
  itineraries: Itinerary[];
}

export interface From {
  lat: number;
  lon: number;
  name: string;
}

export interface Itinerary {
  startTime: Date;
  endTime: Date;
  duration: number;
  walkTime: number;
  walkDistance: number;
  legs: Leg[];
}

export interface Leg {
  from: From;
  to: From;
  startTime: Date;
  endTime: Date;
  duration: number;
  legPolyline: LegPolyline;
  mode: Mode;
  steps: Step[];
  intermediateStops: IntermediateStop[] | null;
  route: Bus | null;
  realTime: boolean;
  arrivalDelay: number;
  distance: number;
}

export interface IntermediateStop {
  id: string;
  code: string;
  name: string;
  lat: number;
  lon: number;
  vehicleMode: Mode;
}

export enum Mode {
  Bus = "BUS",
  Walk = "WALK",
}

export interface LegPolyline {
  encodedValue: string;
  color: null;
}

export interface Step {
  relativeDirection: string;
  distance: number;
  streetName: string;
  lat: number;
  lon: number;
}
