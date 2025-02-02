import { singleFetchRedirect } from "@/lib/redirect";
import { getKindeSession } from "@kinde-oss/kinde-remix-sdk";
import { createMiddleware } from "hono/factory";
import { redirect } from "react-router";

export const getUser = createMiddleware(async (c, next) => {
  const { getUser, headers } = await getKindeSession(c.req.raw);
  const user = await getUser();
  c.set("user", user);

  c.set("headers", headers);
  return next();
});

export const getAuthenticated = createMiddleware(async (c, next) => {
  const url = new URL(c.req.url);

  if (!url.pathname.includes("profile")) {
    return next();
  }

  const user = c.get("user");

  if (user) {
    return next();
  }

  const redirectResponse = redirect("/kinde-auth/login?returnTo=/profile");

  if (!c.req.header("Accept")?.includes("text/html")) {
    if (url.pathname.endsWith(".data")) {
      return singleFetchRedirect(redirectResponse);
    }
    return new Response("Unauthorized", { status: 401 });
  }

  return redirectResponse;
});
