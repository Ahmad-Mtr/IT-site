import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    type: z.enum(["Article", "Tutorial"]),
  }),
});
const roadmapCollection = defineCollection({
  type: "content",
  schema: z.object({
    nodeId: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  roadmap: roadmapCollection, // Add new roadmap collection
};
