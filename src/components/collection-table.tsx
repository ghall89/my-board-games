import { useNavigate } from '@solidjs/router';
import { For } from 'solid-js';
import type { Game } from '~/data/games';
import { handleTransition } from '~/utils/handle-transition';
import Thumbnail from './thumbnail';

interface CollectionTableProps {
	games: Game[];
}

export default function CollectionTable(props: CollectionTableProps) {
	const navigate = useNavigate();

	const handleNavigate = (id: number) => {
		handleTransition(() => navigate(`/game/${id}`), 'forward');
	};

	return (
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
						<th></th>
						<th>Title</th>
						<th>Played</th>
						<th>Est Playtime</th>
						<th>Players</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<For each={props.games}>
						{(game) => (
							<tr>
								<td>
									<Thumbnail
										src={`/assets/covers/${game.bggId}.jpg`}
										alt="Avatar Tailwind CSS Component"
									/>
								</td>
								<td>
									<div>
										<div class="font-bold">{game.title}</div>
									</div>
								</td>
								<td>
									<span
										class={`badge badge-soft ${game.played ? 'badge-primary' : 'badge-secondary'}`}
									>
										{game.played ? 'Played' : 'Unplayed'}
									</span>
								</td>
								<td>
									<span>{game.estPlaytime}m</span>
								</td>
								<td>
									<span>
										{game.minPlayers} - {game.maxPlayers}
									</span>
								</td>
								<th>
									<button
										class="btn btn-outline btn-primary"
										onClick={() => handleNavigate(game.bggId)}
										type="button"
									>
										Details
									</button>
								</th>
							</tr>
						)}
					</For>
				</tbody>
			</table>
		</div>
	);
}
