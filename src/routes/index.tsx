import { For } from 'solid-js';
import CollectionTable from '~/components/collection-table';
import ListItem from '~/components/list-item';

import { games } from '~/data/games';
import Layout from '~/layout';
export default function Home() {
	return (
		<Layout>
			<ul class="list bg-base-100 md:hidden">
				<For each={games}>{(item) => <ListItem game={item} />}</For>
			</ul>
			<div class="max-md:hidden">
				<CollectionTable games={games} />
			</div>
		</Layout>
	);
}
