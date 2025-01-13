import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layouts/navbar.tsx", [
    index("routes/index.tsx"),
    route("/about", "routes/about.tsx"),
    route("/expenses", "routes/expenses.tsx"),
    route("/create-expense", "routes/create-expense.tsx"),
  ]),
] satisfies RouteConfig;
