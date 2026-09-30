import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const digestsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/digests' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    vertical: z.enum(['anomaly-detection', 'agentic-security', 'edge-inference']),
    summary: z.string(),
    takeaways: z.array(z.string()),
    sources: z.array(z.object({
      title: z.string(),
      url: z.string(),
      type: z.enum(['paper', 'article', 'post']),
    })),
  }),
});

export const collections = {
  digests: digestsCollection,
};
