import { Hono } from "hono";
import { logger } from "hono/logger";
import { expenseRoute } from "./routes/expenses";
import type { HonoEnv } from "load-context";
import { getAuthenticated, getUser } from "./routes/kinde";

const app = new Hono<HonoEnv>();

app.use("*", logger());

app.use(getUser, getAuthenticated);

const apiRoutes = app.basePath("/api").route("/expenses", expenseRoute);

export default app;
export type ApiRoutes = typeof apiRoutes;
