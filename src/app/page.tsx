// NEXT
import Link from "next/link";

// UTILS
import { getAllSnippets } from "@/utils/snippetActions";

export default async function HomePage() {
  const snippets = await getAllSnippets();

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className=" p-2 border rounded">
          New
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        {snippets.map(snippet => (
          <Link
            href={`/snippets/${snippet.id}`}
            key={snippet.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <div>{snippet.title}</div>
            <div>View</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// 47
