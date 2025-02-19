import { fail } from '@sveltejs/kit';
import { send } from './sse.js';

export const actions = {
	async default({ request }) {
		const data = await request.formData();
		const vote = data.get('vote')?.toString();
		if (vote === 'good' || vote === 'bad') {
			send(vote);
			return { ok: true };
		}
		return fail(400);
	}
};
