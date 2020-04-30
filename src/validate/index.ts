import { Position } from '../models/interfaces';
import { ConsoleMessage } from '../models/console-message';
import fs from 'fs';
import path from 'path'

const ALLOW_MOVE_VALUES = ['D', 'U', 'L', 'R'];

export function validatePosition(pos: Position): boolean {
	const { x, y } = pos;
	if(isNaN(x) || isNaN(y)) {
		throw new Error(`${ConsoleMessage.INVALID_POSITION}, x: ${x}`)
	}
	return true;
}

export function validMoveSteps(steps: string[]): boolean {
	return !steps.filter((step: string) => !ALLOW_MOVE_VALUES.includes(step)).length
}

export const validateInputFile = (filePath: string, ext: string): boolean => {
	const file = path.resolve(filePath);
	const extension = path.extname(file).replace('.', '');
	return fs.existsSync(file) && extension === ext;
};
