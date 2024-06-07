import { Button } from "@/components/ui/button";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed52f",
//       amount: 200,
//       status: "success",
//       email: "mmmm@example.com",
//     },
//     // ...
//   ];
// }

const sampleData: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 200,
    status: "success",
    email: "mmmm@example.com",
  },
  // Add other entries as needed
];

// Function to generate repeated data
async function getData(): Promise<Payment[]> {
  const repeatedData = Array.from({ length: 30 }, (_, index) => {
    return sampleData.map((item, itemIndex) => ({
      ...item,
      id: `${item.id}-${index}-${itemIndex}`, // Ensure each ID is unique
    }));
  }).flat();

  return repeatedData;
}

export default async function AdminProductsPage() {
  const data = await getData();
  return (
    <>
      <div className="flex justify-between items-center gap-4 mb-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href="/admin/products/new">Add new products</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
}
