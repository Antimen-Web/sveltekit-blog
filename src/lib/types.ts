export type Categories = 'sveltkit' | 'svelte';

export type Post = {
	title: string;
	slug?: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
