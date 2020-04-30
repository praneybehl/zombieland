export enum ConsoleMessage {
	TITLE = '🧟ZOMBIELAND',
	BANNER = 'Zombie Apocalypse v4.5 - interactive command-line application for Ailo coding challenge',
	ERROR = 'ERROR: ',
	SUCCESS = 'SUCCESS: ',
	INFO = 'INFO: ',
	START_BANNER = '      Starting Zombieland Apocalypse V4.5!      ',
	STOP_BANNER = '      Zombieland Apocalypse Complete      ',
	TXT_PARSING_ERROR = 'Parsing text file data, please check file data',
	INVALID_POSITION = 'Invalid position coordinates value',
	ZOMBIE_POSITION_INPUT = 'One zombie needs to awaken, enter it\'s position in coordinates:',
	CREATURE_MSG = 'Poor creature live amongst Zombies, let\'s add some creature to spice it up',
	CREATURE_POSITION_INPUT = 'Add a poor creature, enter it\'s position in coordinates:',
	ZOMBIE_DIRECTION_MSG = `
Zombies are hungry, let's move the zombies so they can bite some poor creatures,
Select Zombmie moves directions: D, U, L, R
where D=Down, U=Up, L=Left, R=Right
`,
	OUTPUT_SCORE = 'Zombies Score: ',
	OUTPUT_ZOMBIES_POSITIONS = 'Zombies Positions: ',
	OUTPUT_CREATURES_POSITIONS = 'Alive Creatures Positions: ',
	ALL_ZOMBIES_DEAD = '😱  All dead!'
}
