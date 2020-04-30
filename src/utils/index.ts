import { red, green, cyan, blue, yellow, bgBlue, bold } from 'kleur';
import * as figlet from 'figlet';
import { Position} from '../models/interfaces';

import { ConsoleMessage } from '../models/console-message';
import { OutputType } from '../models/interfaces';

const newLine = '\n';

export const showTitleAndBanner = (): void => {
    console.log(cyan(figlet.textSync(ConsoleMessage.TITLE, { horizontalLayout: 'full' })));
    console.info(cyan(ConsoleMessage.BANNER));
};

export const showError = (message: string | Error): void => {
    console.error(red(ConsoleMessage.ERROR) + message);
};

export const showSuccess = (message: string): void => {
    console.log(green(ConsoleMessage.SUCCESS) + message + newLine);
};

export const showInfo = (message: string): void => {
    console.info(cyan(ConsoleMessage.INFO) + message + newLine);
};

export const simpleLog = (message: string): void => {
	console.log(cyan(message));
};

export const formatOutputPositions = (positions: Position[]): string => {
	let output: string = '';
	if(positions.length === 0) {
		return ConsoleMessage.ALL_ZOMBIES_DEAD;
	}
	positions.forEach(({x, y}: Position) => output += `(${x}, ${y}) `);
	return output;
};

export const showInfoWithBg = (message: string): void => {
	console.info(newLine + bgBlue(bold(yellow(message))) + newLine);
};

export const showOutput = (data: OutputType): void => {
	console.info(cyan(`${ConsoleMessage.OUTPUT_SCORE} ${data.zombiesScore}`));
	console.info(cyan(`${ConsoleMessage.OUTPUT_ZOMBIES_POSITIONS} ${formatOutputPositions(data.zombiesPositions)}`));
	console.info(cyan(`${ConsoleMessage.OUTPUT_CREATURES_POSITIONS} ${formatOutputPositions(data.creaturePositions)}`));
};

