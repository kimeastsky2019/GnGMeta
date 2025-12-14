import { useEffect } from "react";
import type { ReactNode } from "react";
import {
  HashRouter as ReactRouterHash,
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  type To,
} from "react-router-dom";

const messagingEnabled = import.meta.env.DEV || import.meta.env.VITE_ENABLE_ROUTE_MESSAGING === "true";

type RouterProps = {
  children: ReactNode;
  routes?: string[];
};

function RouteMessenger({ routes }: { routes?: string[] }) {
  const location = useLocation();

  useEffect(() => {
    if (!messagingEnabled) return;
    window.parent?.postMessage(
      {
        type: "ROUTE_LIST",
        routes: routes ?? [],
      },
      "*",
    );
  }, [routes]);

  useEffect(() => {
    if (!messagingEnabled) return;
    window.parent?.postMessage(
      {
        type: "ROUTE_CHANGE",
        path: `${location.pathname}${location.search}${location.hash}`,
        timestamp: Date.now(),
      },
      "*",
    );
  }, [location]);

  return null;
}

export function HashRouter({ children, routes }: RouterProps) {
  return (
    <ReactRouterHash>
      {messagingEnabled ? <RouteMessenger routes={routes} /> : null}
      {children}
    </ReactRouterHash>
  );
}

export { Link, NavLink, Navigate, Outlet, Route, Routes, useLocation, useNavigate, useParams };
export type { To };
