import { Hono } from "hono";
import { logger } from "hono/logger";
import { expenseRoute } from "./expenses";

const app = new Hono();

app.use("*", logger());

app.get("/test", (c) => {
  return c.json({ message: "test" });
});

app.route("/api/expenses", expenseRoute);

export default app;
