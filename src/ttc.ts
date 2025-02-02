import requestly from "requestly";
import * as TTC from "./types";

const api = requestly.create({
  baseUrl: "https://transit.ttc.com.ge/pis-gateway/api/v2",
  params: { locale: "ka" },
  headers: { "X-Api-Key": "c0a2f304-551a-4d08-b8df-2c53ecd57f9f" },
});

export const ttc = {
  setLocale,
  stops,
  stop,
  routes,
  plan,
  busPolyline,
  locations,
  stopRoutes,
  busRoutes,
  arrivalTimes,
};

function setLocale(locale: TTC.Locale) {
  api.params = { ...api.params, locale };
}

async function stops(params?: { locale?: TTC.Locale }) {
  const { data } = await api.get<TTC.BusStop[]>("/stops", { params });

  return data;
}

async function stop(stopId: string) {
  const { data } = await api.get<TTC.BusStop>(`/stops/1:${stopId}`);

  return data;
}

async function routes(params?: { locale?: TTC.Locale }) {
  const { data } = await api.get<TTC.Bus[]>("/routes", {
    params: { ...params, modes: "BUS" },
  });

  return data;
}

async function plan({
  from,
  to,
  locale = "en",
}: {
  from: TTC.LatLng;
  to: TTC.LatLng;
  locale?: TTC.Locale;
}) {
  const { data } = await api.get<TTC.BusPlan>("/plan", {
    params: {
      fromPlace: from.join(","),
      toPlace: to.join(","),
      departMode: "leaveNow",
      modes: "WALK,BUS",
      optimize: "quick",
      locale,
    },
  });

  return data;
}

async function busPolyline({
  busId,
  forward = true,
}: {
  busId: string;
  forward?: boolean;
}) {
  const { data } = await api.get<{ encodedValue: string }>(
    `/routes/1:${busId}/polyline`,
    { params: { forward: forward.toString() } }
  );

  return data;
}

async function locations({
  busId,
  forward = true,
}: {
  busId: string;
  forward?: boolean;
}) {
  const { data } = await api.get<TTC.BusLocation[]>(
    `/routes/1:${busId}/positions`,
    { params: { forward: forward.toString() } }
  );

  return data;
}

async function stopRoutes({
  stopId,
  locale = "en",
}: {
  stopId: string;
  locale?: TTC.Locale;
}) {
  const { data } = await api.get<TTC.Bus[]>(`/stops/1:${stopId}/routes`, {
    params: { locale },
  });

  return data;
}

async function busRoutes({
  busId,
  forward,
  locale = "en",
}: {
  busId: string;
  forward?: boolean;
  locale?: TTC.Locale;
}) {
  const { data, ok, status } = await api.get<TTC.BusStop[]>(
    `/routes/1:${busId}/stops`,
    {
      params: {
        locale,
        forward: (forward ?? false).toString(),
      },
    }
  );

  if (!ok) {
    throw new Error(
      `request failed with status code ${status}: ${
        typeof data === "object" ? JSON.stringify(data, null, 2) : data
      }`
    );
  }

  return data;
}

async function arrivalTimes({
  stopId,
  locale = "en",
  ignoreScheduledArrivalTimes = false,
}: {
  stopId: string;
  locale?: TTC.Locale;
  ignoreScheduledArrivalTimes?: boolean;
}) {
  const { data } = await api.get<TTC.BusArrival[]>(
    `/stops/1:${stopId}/arrival-times`,
    {
      params: {
        locale,
        ignoreScheduledArrivalTimes: ignoreScheduledArrivalTimes.toString(),
      },
    }
  );

  return data;
}
