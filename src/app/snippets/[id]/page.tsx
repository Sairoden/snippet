// NEXT
import { notFound } from "next/navigation";
import Link from "next/link";

// UTILS
import { getSingleSnippet, deleteSnippet } from "@/utils/snippetActions";

interface SingleSnippetProps {
  params: {
    id: string;
  };
}

export default async function SingleSnippet({ params }: SingleSnippetProps) {
  const snippet = await getSingleSnippet(+params.id);

  if (!snippet) return notFound();

  const deleteSnippetAction = deleteSnippet.bind(null, +params.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>

        <div className="flex gap-4">
          <Link
            href={`/snippets/${params.id}/edit`}
            className="p-2 border rounded bg-green-300"
          >
            Edit
          </Link>

          <form action={deleteSnippetAction}>
            <button type="submit" className="p-2 border rounded bg-red-300">
              Delete
            </button>
          </form>
        </div>
      </div>

      <pre className="p-3 border rounded bg-gray-200 border-gray-300">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
