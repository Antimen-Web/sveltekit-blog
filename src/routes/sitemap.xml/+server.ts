import * as config from '$lib/index.ts';
import type { Post } from '$lib/types';

export const prerender = true;
export async function GET({ fetch }) {
	const response = await fetch('api/content/posts');
	const posts: Post[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
			<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
				${posts
					.map(
						(post) => `
						<url>
							<loc>${config.url}${post.slug}</loc>
                            <lastmod>${new Date(post.date).toUTCString()}</lastmod>
                            <changefreq>weekly</changefreq>
                            <priority>0.8</priority>
						</url>
					`
					)
					.join('')}
			</urlset>
	`.trim();

	return new Response(xml, { headers });
}
