import { hc } from "hono/client";
import type { ApiRoutes } from "@server/index";

const baseURL = "http://localhost:5173";

const client = hc<ApiRoutes>(`${baseURL}`);

export const api = client.api;
