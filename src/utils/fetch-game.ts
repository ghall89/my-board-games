import { BoardGameGeekClient } from "bgg-client";

export async function fetchGame(id: number) {
  console.log(id);
  const bgg = new BoardGameGeekClient();

  const game = await bgg.thing(id);
  console.log(game);
  return game;
}
