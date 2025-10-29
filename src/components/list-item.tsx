import { useNavigate } from '@solidjs/router';
import type { Expansion, Game } from '~/data/games';

import { handleTransition } from '~/utils/handle-transition';

interface ListItemProps {
	game: Game | Expansion;
}

export default function ListItem(props: ListItemProps) {
	const navigate = useNavigate();

	const handleNavigate = () => {
		handleTransition(() => navigate(`/game/${props.game.bggId}`), 'forward');
	};

	return (
		<li class="list-row">
			<div>
				<img
					class="size-10 object-cover rounded-box"
					src={`/assets/covers/${props.game.bggId}.jpg`}
					alt=""
				/>
			</div>
			<div>
				<div>{props.game.title}</div>
				<div class="text-xs uppercase font-semibold opacity-60">
					{props.game.played ? 'Played' : 'Unplayed'}
				</div>
			</div>
			<button
				aria-label="Info"
				class="btn btn-square btn-ghost"
				onClick={handleNavigate}
				type="button"
			>
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
						d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
					/>
				</svg>
			</button>
		</li>
	);
}
