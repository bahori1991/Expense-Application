import { hc } from "hono/client";
import type { ApiRoutes } from "@server/index";

const baseURL =
  process.env.NODE_ENV === "production" ? "https://example.com" : "http://localhost:5173";

const client = hc<ApiRoutes>(`${baseURL}`);

export const api = client.api;
