import { For } from "solid-js";
import { createStore } from "solid-js/store";

import { games } from "~/data/games";
import Layout from "~/layout";
import ListItem from "~/components/list-item";

export default function Home() {
  return (
    <Layout>
      <ul class="list bg-base-100 rounded-box shadow-md">
        <For each={games}>{(item) => <ListItem game={item} />}</For>
      </ul>
    </Layout>
  );
}
