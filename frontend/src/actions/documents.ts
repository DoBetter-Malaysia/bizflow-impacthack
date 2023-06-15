"use server";

import { prisma } from "@/features/prisma/db";

export async function getAllDocuments() {
  return await prisma.document.findMany();
}
