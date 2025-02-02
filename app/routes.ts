import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layouts/navbar.tsx", [
    index("routes/index.tsx"),
    route("/about", "routes/about.tsx"),
    route("/expenses", "routes/expenses.tsx"),
    route("/create-expense", "routes/create-expense.tsx"),
    route("/profile", "routes/profile.tsx"),
    route("/kinde-auth/:index", "routes/auth/kinde-auth.tsx"),
  ]),
] satisfies RouteConfig;
