import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/notes',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'ja']),
    category: z.string(),
    readingTime: z.string(),
    draft: z.boolean().default(false),
    translationOf: z.string().optional(),
  }),
});
export const collections = { notes };
