// @ts-nocheck
import { USERS_API_URL } from '$env/static/private'; //Call env variables
import type { PageServerLoad } from './$types'; //Enable Page Server Load from Server Side


export const load = async () => {
	const fetchUser = async () => {
		const res = await fetch(`${USERS_API_URL}`);
		const data = await res.json();
		return data;
	};
	return {
		users: await fetchUser()
	};
};
;null as any as PageServerLoad;