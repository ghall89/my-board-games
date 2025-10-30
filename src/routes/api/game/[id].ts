import type { APIEvent } from '@solidjs/start/server';
import { BoardGameGeekClient } from 'bgg-client';

export async function GET({ params }: APIEvent) {
	const bgg = new BoardGameGeekClient(process.env.BGG_KEY);

	const id = Number(params.id);

	const game = await bgg.thing(id);

	return new Response(JSON.stringify(game), {
		headers: {
			'Cache-Control': 'public, max-age=3600',
			'Content-Type': 'application/json',
		},
	});
}
