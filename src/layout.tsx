import type { JSX } from 'solid-js';
import Nav from './components/nav';

interface LayoutProps {
	children: JSX.Element;
}

export default function Layout(props: LayoutProps) {
	return (
		<>
			<Nav />
			<main class="pt-16">{props.children}</main>
		</>
	);
}
