import { useLocation, useNavigate } from '@solidjs/router';
import { createMemo, Match, Switch } from 'solid-js';

import { handleTransition } from '~/utils/handle-transition';

export default function Nav() {
	const location = useLocation();
	const navigate = useNavigate();

	const currentPath = createMemo(() => location.pathname);

	const handleNavigate = () => {
		handleTransition(
			() => (window.history.length > 1 ? navigate(-1) : navigate('/')),
			'backward',
		);
	};

	return (
		<div class="navbar bg-base-100 shadow-sm fixed z-30 nav-container">
			<Switch>
				<Match when={currentPath() !== '/'}>
					<button
						aria-label="Back"
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
								d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
							/>
						</svg>
					</button>
				</Match>
				<Match when={currentPath() === '/'}>
					<span class="m-3 text-xl">Graham's Board Games</span>
				</Match>
			</Switch>
		</div>
	);
}
