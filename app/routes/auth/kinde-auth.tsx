import type { Route } from "./+types/kinde-auth";
import { handleAuth } from "@kinde-oss/kinde-remix-sdk";

export async function loader({ params, request }: Route.LoaderArgs) {
  return await handleAuth(request, params.index);
}
