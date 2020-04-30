import { InputDataType, Position, OutputType } from '../models/interfaces';
import { Zombie} from '../zombie';
import { showSuccess } from '../utils';

export async function awakeZombieAction(data: InputDataType): Promise<OutputType> {
	let zombies = [];
	let zombiesScore = 0;
	let zombiesPositions = [];
	let { creaturePositions, zombiePosition, moveSteps, worldDimension } = data;
	// Check if Zombie can bite a creature.
	function biteCreature(pos: Position) {
		creaturePositions = creaturePositions.reduce((acc: Position[], curr: Position ) => {
			const isMatch = JSON.stringify(curr) === JSON.stringify(pos)
			if(isMatch) {
				zombiesScore += 1;
				showSuccess(`Zombies scored at position: x: ${pos.x}, y: ${pos.y}`)
				// Push infected creature to Zombies list.
				zombies.push(new Zombie({...curr}));
			} else acc.push(curr);
			return acc;
		}, []);
	}
	zombies.push(new Zombie({...zombiePosition}));
	while (zombies.length > 0) {
		const awakeZombie = zombies[0];
		// Check if the first Zombie's collides with a creature to bite.
		biteCreature(zombiePosition);
		moveSteps.forEach((move: any) => {
			// Move awaken zombie through the steps.
			const newPosition = awakeZombie.move(move, worldDimension);
			// Check if the Zombie can bite a creature.
			biteCreature(newPosition);
		});
		// Once the awake Zombie has run it's moves, move it to output list
		zombiesPositions.push(awakeZombie.getPosition());
		zombies.splice(0,1);
	}
	return {
		zombiesScore,
		zombiesPositions,
		creaturePositions,
	}
}
