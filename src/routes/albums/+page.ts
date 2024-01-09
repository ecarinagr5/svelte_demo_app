import type { PageLoad } from './$types';

export const load:PageLoad = async ({ fetch }) => {
	let post = [];
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/albums');
		post = await res.json();
	} catch (error) {
		console.log('Error -->', error);
	}
	return {albums:post}

};
