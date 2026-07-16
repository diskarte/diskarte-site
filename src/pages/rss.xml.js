import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = await getCollection('notes', ({ data }) => data.lang === 'en' && !data.draft);
  return rss({
    title: 'Diskarte Notes',
    description: 'Working papers, architecture notes, and build journal from the making of the Organizational Runtime.',
    site: context.site,
    items: notes
      .sort((a, b) => b.data.date - a.data.date)
      .map((n) => ({
        title: n.data.title,
        description: n.data.summary,
        pubDate: n.data.date,
        link: `/notes/${n.id.replace(/\.en$/, '')}`,
      })),
  });
}
