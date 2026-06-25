import { fallbackNotes, fallbackProfile, fallbackProjects } from "../data/fallback";
import { prisma } from "../lib/prisma";

const hasDatabase = Boolean(process.env.DATABASE_URL);

export async function getProfile() {
  if (!hasDatabase) {
    return fallbackProfile;
  }

  try {
    return await prisma.profile.findFirst({
      orderBy: { updatedAt: "desc" },
    });
  } catch {
    return fallbackProfile;
  }
}

export async function getProjects() {
  if (!hasDatabase) {
    return fallbackProjects;
  }

  try {
    return await prisma.project.findMany({
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
  } catch {
    return fallbackProjects;
  }
}

export async function getFeaturedProjects() {
  if (!hasDatabase) {
    return fallbackProjects.filter((project) => project.featured);
  }

  try {
    return await prisma.project.findMany({
      where: { featured: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
      take: 3,
    });
  } catch {
    return fallbackProjects.filter((project) => project.featured);
  }
}

export async function getNotes() {
  if (!hasDatabase) {
    return fallbackNotes;
  }

  try {
    return await prisma.note.findMany({
      where: { published: true },
      orderBy: { date: "desc" },
    });
  } catch {
    return fallbackNotes;
  }
}

export async function getNoteBySlug(slug: string) {
  if (!hasDatabase) {
    return fallbackNotes.find((note) => note.slug === slug) ?? null;
  }

  try {
    return await prisma.note.findFirst({
      where: {
        slug,
        published: true,
      },
    });
  } catch {
    return fallbackNotes.find((note) => note.slug === slug) ?? null;
  }
}
