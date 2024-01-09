// @ts-nocheck
import type { PageLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageLoad>[0]) => {
	let post = [];
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/albums');
		post = await res.json();
	} catch (error) {
		console.log('Error -->', error);
	}
	return {albums:post}

};
