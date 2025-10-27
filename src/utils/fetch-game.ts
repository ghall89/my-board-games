import { BoardGameGeekClient } from "bgg-client";

export async function fetchGame(id: number) {
  const bgg = new BoardGameGeekClient();

  const game = await bgg.thing(id);

  return game;
}
