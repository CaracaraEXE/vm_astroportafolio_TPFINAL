import { defineCollection } from "astro/content/config";
import { z } from "astro/zod";
import { file } from "astro/loaders";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

const projects = defineCollection({
    loader: file("src/data/portfolioworks.json",{
        parser: (text) => {
            const data = JSON.parse(text);
            return data.map((item: any) => ({
                ...item,
                id: slugify(item.title),
            }))
        }
    }),
    schema: z.object({
        title: z.string(),
        year: z.string(),
        category:z.array(z.string()).min(1),
        desc: z.string(),
        image: z.array(z.object({
            url: z.string(),
            alt: z.string()
        })).min(1),
        extUrl:z.string() || z.object()
    })
})

export const collections = {projects};