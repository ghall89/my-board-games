export function handleTransition(
	fn: () => void,
	direction: 'forward' | 'backward',
) {
	document.documentElement.classList.add(direction);
	document
		.startViewTransition(() => {
			fn();
		})
		.finished.then(() => {
			document.documentElement.classList.remove(direction);
		});
}
