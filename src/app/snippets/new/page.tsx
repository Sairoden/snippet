"use client";

// REACT
import { useFormState } from "react-dom";

// UTILS
import { createSnippet } from "@/utils/snippetActions";

export default function SnippetCreatePage() {
  const [formState, formAction] = useFormState(createSnippet, { message: "" });

  return (
    <form action={formAction}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12 capitalize">
            title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="code" className="w-12 capitalize">
            code
          </label>
          <textarea
            id="code"
            name="code"
            className="border rounded p-2 w-full"
          />
        </div>

        {formState.message && (
          <div className="my-2  py-2 bg-red-200 border rounded border-red-200">
            {formState.message}
          </div>
        )}

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
