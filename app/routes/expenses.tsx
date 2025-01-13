import { api } from "@/lib/api";
import type { Route } from "./+types/expenses";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export async function loader() {
  const res = await api.expenses.$get();
  if (!res.ok) {
    throw new Error("Server Error has occurred when getting all expenses.");
  }
  const data = await res.json();
  return data;
}

export default function Expenses({ loaderData }: Route.ComponentProps) {
  const { expenses } = loaderData;
  return (
    <div className="p-2 max-w-xl m-auto">
      <Table>
        <TableCaption>A list of all your expenses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.id}</TableCell>
              <TableCell>{expense.title}</TableCell>
              <TableCell>{expense.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
