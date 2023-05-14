import {
  ArrivalInfo,
  ArrivalTimesResponse,
  BusesResponse,
  BusLiveInfo,
  BusRoute,
  Route,
  RouteInfo,
  Stop,
  StopInfo,
  StopRoute,
} from "./types.js";
import { requests } from "@sunney/requests";

const api = requests.client({
  baseUrl: "http://transfer.ttc.com.ge:8080/otp/routers/ttc",
});

const fetch = async <T>(endpoint: string) =>
  await (
    await api.get<T>(endpoint)
  ).data;

const ttc = {
  /**
   * Get all routes.
   * @returns {Promise<Route[]>}
   */
  routes: (): Promise<Route[]> => fetch("/routes"),

  /**
   * Get all bus stops
   * @returns {Promise<Stop[]>}
   */
  busRoutes: (): Promise<BusRoute[]> => fetch("/routes?type=3"),

  /**
   * Returns a list of stops, note that it includes stops for metro as well.
   * @returns {Promise<Stop[]>}
   */
  stops: (): Promise<Stop[]> => fetch("/index/stops"),

  /**
   * Bus/Metro stop info
   * @param stopId The stop id, e.g. "1:1946"
   * @returns {Promise<StopInfo>}
   */
  stopInfo: (stopId: string): Promise<StopInfo> =>
    fetch(`/index/stops/${stopId}`),

  /**
   * Get all routes for a stop
   * @param stopId The stop id, e.g. "1:1946"
   * @returns {Promise<StopRoute[]>}
   */
  stopRoutes: (stopId: string): Promise<StopRoute[]> =>
    fetch(`/index/stops/${stopId}/routes`),

  /**
   * Get all arrivals for a stop
   * @example
   *
   * ```
   * ttc.stopArrivalTimes("1946").then((arrivalTimes) => {
   *   for (const at of arrivalTimes) {
   *     console.log(at.ArrivalTime, at.RouteNumber);
   *   }
   * });
   * ```
   *
   * @param stopId The stop id, e.g. "1946"
   * @returns {Promise<ArrivalTimes>}
   * @see https://transfer.ttc.com.ge/otp/routers/ttc/index/stops/1946/arrivals
   */
  stopArrivalTimes: (stopId: string): Promise<ArrivalInfo[]> =>
    fetch<ArrivalTimesResponse>(`/stopArrivalTimes?stopId=${stopId}`).then(
      (res) => res.ArrivalTime
    ),

  /**
   * @param routeNumber The bus number
   * @param forward If true, returns the stops for the route in the forward direction.
   * @returns {Promise<RouteInfo>}
   */
  busRouteInfo: (routeNumber: string, forward: boolean): Promise<RouteInfo> =>
    fetch(
      `/routeInfo?routeNumber=${routeNumber}&type=bus&forward=${Number(
        forward
      )}`
    ),

  /**
   * Get live info about buses
   * @param routeNumber The bus number
   * @param forward If true, returns the stops for the route in the forward direction.
   * @returns {Promise<BusLiveInfo>}
   */
  busLiveLocations: (
    routeNumber: string,
    forward: boolean
  ): Promise<BusLiveInfo[]> =>
    fetch<BusesResponse>(
      `/buses?routeNumber=${routeNumber}&forward=${Number(forward)}`
    ).then((res) => res.bus),
};

export { ttc };
