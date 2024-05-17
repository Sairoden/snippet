"use client";

interface ErrorCreateSnippetProps {
  error: Error;
  reset: () => void;
}

export default function ErrorCreateSnippet({ error }: ErrorCreateSnippetProps) {
  return <div>{error.message}</div>;
}
