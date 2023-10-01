import type { Post } from '../lib/types';
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const response = await fetch('api/content/posts');
	const posts: Post[] = await response.json();
	const homepage = await import(`../content/index.md`);

	return {
		posts,
		content: homepage.default,
		meta: homepage.metadata
	};
}
