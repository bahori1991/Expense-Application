import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, redirect, useNavigation } from "react-router";
import type { Route } from "./+types/create-expense";
import { api } from "@/lib/api";
import { createPostSchema } from "@server/routes/expenses";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const expense = createPostSchema.parse(data);
  const res = await api.expenses.$post({ json: expense });

  if (!res.ok) {
    throw new Error("Server Error has occurred when posting new expense");
  }

  return redirect("/expenses");
}

export default function CreateExpense() {
  const navigation = useNavigation();
  return (
    <div className="p-2">
      <h2>Create New Expense</h2>
      <Form method="post" className="max-w-md m-auto">
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" name="title" placeholder="Title" defaultValue="" />
        <Label htmlFor="amount">Amount</Label>
        <Input type="number" id="amount" name="amount" placeholder="Amount" defaultValue="0" />
        <Button type="submit" className="mt-4">
          {navigation.state === "submitting" ? "Submitting..." : "Create Expense"}
        </Button>
      </Form>
    </div>
  );
}
