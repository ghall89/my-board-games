import { useParams } from '@solidjs/router';
import { createMemo, For, Show, Suspense } from 'solid-js';
import GameInfo from '~/components/game-info';
import ListItem from '~/components/list-item';
import { games } from '~/data/games';
import Layout from '~/layout';

export default function GamePage() {
	const params = useParams();

	const localData = createMemo(() =>
		games.find((item) => item.bggId === Number(params.id)),
	);

	return (
		<Layout>
			<div class="flex flex-col items-center m-10 gap-6">
				<img
					class="object-cover h-56 rounded-box"
					src={`/assets/covers/${params.id}.jpg`}
					alt=""
				/>
				<Suspense fallback={<div class="skeleton h-40 w-96"></div>}>
					<GameInfo />
				</Suspense>
				<Show when={localData()?.expansions}>
					<ul class="list bg-base-100 rounded-box shadow-md">
						<li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
							Expansions
						</li>
						<For each={localData()?.expansions}>
							{(item) => <ListItem game={item} />}
						</For>
					</ul>
				</Show>
			</div>
		</Layout>
	);
}
