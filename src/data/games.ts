export type CollectionStatus = 'owned' | 'not-owned' | 'wanted';

interface BaseItem {
	title: string;
	bggId: number;
	played: boolean;
	collectionStatus: CollectionStatus;
	note?: string;
}

export interface Game extends BaseItem {
	minPlayers: number;
	maxPlayers: number;
	estPlaytime: number;
	expansions?: Expansion[];
}

export interface Expansion extends BaseItem {}

export const games: Game[] = [
	{
		title: 'Age of Galaxy',
		bggId: 330950,
		played: true,
		collectionStatus: 'owned',
		minPlayers: 1,
		maxPlayers: 4,
		estPlaytime: 60,
	},
	{
		title: 'Akropolis',
		bggId: 357563,
		played: true,
		collectionStatus: 'owned',
		minPlayers: 2,
		maxPlayers: 4,
		estPlaytime: 30,
	},
	{
		title: 'Cubirds',
		bggId: 245476,
		played: true,
		collectionStatus: 'owned',
		minPlayers: 2,
		maxPlayers: 5,
		estPlaytime: 20,
	},
	{
		title: 'Munchkin',
		bggId: 1927,
		played: true,
		collectionStatus: 'owned',
		minPlayers: 3,
		maxPlayers: 6,
		estPlaytime: 90,
	},
	{
		title: 'Catan',
		bggId: 13,
		played: true,
		collectionStatus: 'owned',
		expansions: [
			{
				title: 'Cities and Knights',
				bggId: 926,
				played: false,
				collectionStatus: 'owned',
				note: 'Missing an important component, can only take 3 players.',
			},
		],
		minPlayers: 3,
		maxPlayers: 4,
		estPlaytime: 120,
	},
	{
		title: 'Knarr',
		bggId: 379629,
		played: true,
		collectionStatus: 'owned',
		minPlayers: 2,
		maxPlayers: 4,
		estPlaytime: 30,
	},
	{
		title: 'Salton Sea',
		bggId: 402663,
		played: true,
		collectionStatus: 'owned',
		minPlayers: 1,
		maxPlayers: 4,
		estPlaytime: 120,
	},
	{
		title: 'Sea Salt and Paper',
		bggId: 367220,
		played: true,
		collectionStatus: 'owned',
		expansions: [
			{
				title: 'Extra Salt',
				bggId: 396545,
				played: true,
				collectionStatus: 'owned',
			},
		],
		minPlayers: 2,
		maxPlayers: 4,
		estPlaytime: 40,
	},
	{
		title: 'That Escalated Quickly',
		bggId: 410382,
		played: true,
		collectionStatus: 'owned',
		minPlayers: 2,
		maxPlayers: 8,
		estPlaytime: 15,
	},
	{
		title: 'Happy Little Dinosaurs',
		bggId: 325414,
		played: true,
		collectionStatus: 'owned',
		expansions: [
			{
				title: 'Hazards Ahead',
				bggId: 395822,
				played: true,
				collectionStatus: 'owned',
			},
		],
		minPlayers: 2,
		maxPlayers: 6,
		estPlaytime: 60,
	},
	{
		title: 'Here to Slay',
		bggId: 299252,
		played: true,
		collectionStatus: 'owned',
		minPlayers: 2,
		maxPlayers: 6,
		estPlaytime: 45,
	},
	{
		title: 'Fall of Rome',
		bggId: 260428,
		played: true,
		collectionStatus: 'owned',
		minPlayers: 1,
		maxPlayers: 5,
		estPlaytime: 60,
	},
	{
		title: 'Sand',
		bggId: 402669,
		played: false,
		collectionStatus: 'owned',
		minPlayers: 1,
		maxPlayers: 4,
		estPlaytime: 120,
	},
	{
		title: 'Skyrim: The Adventure Game',
		bggId: 342372,
		played: false,
		collectionStatus: 'owned',
		minPlayers: 1,
		maxPlayers: 4,
		estPlaytime: 120,
	},
];
