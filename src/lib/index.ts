export function create_sse() {
	const controllers = new Set<ReadableStreamDefaultController<unknown>>();

	function GET() {
		let controller: ReadableStreamDefaultController<unknown>;
		return new Response(
			new ReadableStream({
				start(_controller) {
					controller = _controller;
					controllers.add(controller);
				},
				cancel() {
					controllers.delete(controller);
				}
			}),
			{
				headers: {
					'content-type': 'text/event-stream',
					'Access-Control-Allow-Origin': '*'
				}
			}
		);
	}

	return {
		controllers,
		GET,
		send(data: unknown, event = 'data') {
			for (const controller of controllers) {
				controller.enqueue(`${event}: ${JSON.stringify(data)}\n\n`);
			}
		}
	};
}
