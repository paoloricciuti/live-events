import { create_sse } from '$lib';

const { GET, send } = create_sse();

export { GET, send };
