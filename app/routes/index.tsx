import type { Route } from "./+types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/lib/api";

export async function loader() {
  const res = await api.expenses["total-spent"].$get();
  if (!res.ok) {
    throw new Error("Server Error has occurred when getting total spent.");
  }
  const total = await res.json();
  return total;
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { total } = loaderData;
  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>Total Spent</CardTitle>
        <CardDescription>The total amount you've spent</CardDescription>
      </CardHeader>
      <CardContent>{total}</CardContent>
    </Card>
  );
}
