import {
	getPositionQuestion,
	getWorldDimensionQuestion,
	addMoreQuestion,
	getZombieMovesQuestion
} from '../questions';
import { ConsoleMessage } from '../models/console-message';
import { showError, simpleLog } from '../utils';
import { validatePosition } from '../validate';

export async function cliInputActions(): Promise<any> {
	let creaturePositions = [];
	let moveSteps = [];
	let addMoreCreatures: boolean = true;
	let addMoreDirections: boolean = true;
	try {
		const { worldDimension } = await getWorldDimensionQuestion();
		simpleLog(`\n${ConsoleMessage.ZOMBIE_POSITION_INPUT}`);

		let { zombiePosition } = await getPositionQuestion({
			nameX: 'zombiePosition.x',
			nameY: 'zombiePosition.y',
			messageX: `x axis between (0-${worldDimension && worldDimension - 1}):`,
			messageY: `y axis between (0-${worldDimension && worldDimension - 1}):`,
			girdSize: worldDimension
		});
		zombiePosition && validatePosition(zombiePosition);

		simpleLog(`\n${ConsoleMessage.CREATURE_MSG}`);
		while (addMoreCreatures) {
			simpleLog(ConsoleMessage.CREATURE_POSITION_INPUT);
			let { creaturesPosition } = await getPositionQuestion({
				nameX: 'creaturesPosition.x',
				nameY: 'creaturesPosition.y',
				messageX: `x axis between (0-${worldDimension && worldDimension - 1}):`,
				messageY: `y axis between (0-${worldDimension && worldDimension - 1}):`,
				girdSize: worldDimension
			});
			creaturesPosition && creaturePositions.push(creaturesPosition);
			const { addMore } = await addMoreQuestion('Add more poor creature to Zombieland?');
			addMoreCreatures = addMore;
		}

		simpleLog(ConsoleMessage.ZOMBIE_DIRECTION_MSG);
		while (addMoreDirections) {
			let { moveStep } = await getZombieMovesQuestion();
			moveStep && moveSteps.push(moveStep);
			const { addMore } = await addMoreQuestion('Add more Zombie move step?');
			addMoreDirections = addMore;
		}

		return {
			worldDimension,
			zombiePosition,
			creaturePositions,
			moveSteps
		};
	} catch (e) {
		showError(e);
	}
}
