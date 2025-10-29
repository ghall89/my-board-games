import { For } from 'solid-js';
import ListItem from '~/components/list-item';
import { games } from '~/data/games';
import Layout from '~/layout';

export default function Home() {
	return (
		<Layout>
			<ul class="list bg-base-100 ">
				<For each={games}>{(item) => <ListItem game={item} />}</For>
			</ul>
		</Layout>
	);
}
