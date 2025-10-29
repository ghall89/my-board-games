import { useParams } from '@solidjs/router';
import { createMemo, createResource, For, Match, Show, Switch } from 'solid-js';
import ListItem from '~/components/list-item';
import { games } from '~/data/games';
import Layout from '~/layout';
import { fetchGame } from '~/utils/fetch-game';

export default function GamePage() {
	const params = useParams();

	const [game] = createResource(params.id, () => fetchGame(Number(params.id)));

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
				<Show when={game.loading}>
					<p>Loading...</p>
				</Show>
				<Switch>
					<Match when={game.error}>
						<span>Error: {game.error}</span>
					</Match>
					<Match when={game()}>
						<h2 class="text-3xl text-center font-bold">
							{game()?.name[0].value}
						</h2>
						<div class="stats shadow">
							<div class="stat">
								<div class="stat-figure text-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="size-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
										/>
									</svg>
								</div>
								<div class="stat-value text-primary">
									{game()?.minplayers.value} - {game()?.maxplayers.value}
								</div>
								<div class="stat-desc">Players</div>
							</div>
							<div class="stat">
								<div class="stat-figure text-secondary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="size-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
										/>
									</svg>
								</div>
								<div class="stat-value text-secondary">
									{game()?.playingtime.value}m
								</div>
								<div class="stat-desc">Est. Playtime</div>
							</div>
						</div>
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
					</Match>
				</Switch>
			</div>
		</Layout>
	);
}
