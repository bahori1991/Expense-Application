import { Hono } from "hono";
import { logger } from "hono/logger";
import { expenseRoute } from "./expenses";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api").route("/expenses", expenseRoute);

export default app;
export type ApiRoutes = typeof apiRoutes;
