import { getCollection } from 'astro:content'

// Drafts show up in `astro dev` but are left out of production builds
export const getPosts = async () =>
  (
    await getCollection(
      'blog',
      ({ data }) => import.meta.env.DEV || !data.draft
    )
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
