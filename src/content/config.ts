import { defineCollection, z } from "astro:content";

const aboutMeCollection = defineCollection({
  type: "content",
  schema: z.object({}),
});

export const collections = {
  "about-me": aboutMeCollection,
};
