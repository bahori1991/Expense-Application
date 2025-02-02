import type { Route } from "./+types/profile";

export async function loader({ context }: Route.LoaderArgs) {
  const user = context.hono.context.var.user;
  return { user };
}

export default function Profile({ loaderData }: Route.ComponentProps) {
  const { user } = loaderData;
  return (
    <div className="p-2">
      <h3>
        Hello {user?.given_name} {user?.family_name}!
      </h3>
    </div>
  );
}
