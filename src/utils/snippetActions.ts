"use server";

// NEXT
import { redirect } from "next/navigation";

// LIBRARIES
import { z } from "zod";

// DB
import prisma from "@/db";

export const getAllSnippets = async () => {
  return await prisma.snippet.findMany();
};

export const getSingleSnippet = async (id: number) => {
  try {
    return await prisma.snippet.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {
    return console.log(err);
  }
};

export const createSnippet = async (
  formState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const Snippet = z.object({
      title: z.string().min(3),
      code: z.string().min(10),
    });

    const result = Snippet.safeParse({ title, code });

    if (!result.success) {
      return { message: result.error.errors[0].message };
    }

    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    console.log(err);
  }

  redirect("/");
};

export const updateSnippet = async (id: number, code: string) => {
  try {
    await prisma.snippet.update({
      where: { id },
      data: { code },
    });
  } catch (err) {
    console.error(err);
  }

  redirect("/");
};

export const deleteSnippet = async (id: number) => {
  try {
    await prisma.snippet.delete({ where: { id } });
  } catch (err) {
    console.error(err);
  }

  redirect("/");
};
