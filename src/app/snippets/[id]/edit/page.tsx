// NEXT
import { notFound } from "next/navigation";

// COMPONENTS
import { SnippetEditForm } from "@/components";

// UTILS
import { getSingleSnippet } from "@/utils/snippetActions";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage({
  params,
}: SnippetEditPageProps) {
  const snippet = await getSingleSnippet(+params.id);

  if (!snippet) notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
