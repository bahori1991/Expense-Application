import type { UserType } from "@kinde-oss/kinde-typescript-sdk";
import type { Context } from "hono";

export type HonoEnv = {
  Variables: {
    user: UserType | null;
    headers: Headers;
  };
};

type GetLoadContextArgs = {
  request: Request;
  context: {
    hono: { context: Context<HonoEnv> };
  };
};

declare module "react-router" {
  interface AppLoadContext extends ReturnType<typeof getLoadContext> {}
}

export function getLoadContext({ context }: GetLoadContextArgs) {
  return {
    ...context,
  };
}
