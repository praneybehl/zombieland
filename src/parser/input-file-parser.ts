import fs from 'fs-extra';
import path from 'path';
import { showError } from '../utils';
import { InputDataType, InputTypeText, Position } from '../models/interfaces';
import { ConsoleMessage } from '../models/console-message';
import { validatePosition, validMoveSteps } from '../validate';

export function parseTxtFile(filename: string): InputDataType | undefined {
	const filePath = path.resolve(filename);
	try {
		if (fs.existsSync(filePath)) {
			const fileData: InputTypeText = fs.readFileSync(filePath, 'utf8').split('\n');
			return formatInputData(fileData);
		}
	} catch (err) {
		showError(err);
	}
}

export function parseJsonFile(filename: string): InputDataType | undefined {
	const filePath = path.resolve(filename);
	try {
		if (fs.existsSync(filePath)) {
			const fileData = fs.readJsonSync(filePath);
			const worldDimension = parseInt(fileData.worldDimension);
			const zombiePosition = validatePosition(fileData.zombiePosition) && fileData.zombiePosition;
			const creaturePositions = fileData.creaturePositions
				.map((pos: Position) => validatePosition(pos) && pos);
			const moveSteps = fileData.moveSteps;
			validMoveSteps(moveSteps);
			return {
				worldDimension,
				zombiePosition,
				creaturePositions,
				moveSteps,
			};
		}
	} catch (err) {
		showError(err);
	}
}

export function formatPosition(data: string): Position {
	try {
		const coordinates = data.split(',');
		const position = {
			x: parseInt(coordinates[0]),
			y: parseInt(coordinates[1])
		};
		validatePosition(position);
		return position;
	} catch (err) {
		throw new Error(`${ConsoleMessage.INVALID_POSITION}`)
	}
}

export function formatInputData(data: InputTypeText): InputDataType {
	try {
		const worldDimension = parseInt(data[0]);
		const zombiePosition = formatPosition(data[1]);
		const creaturePositions = data[2].split(' ')
			.map((pos: string) => formatPosition(pos));
		const moveSteps: string[] = data[3].split('');
		validMoveSteps(moveSteps);
		return {
			worldDimension,
			zombiePosition,
			creaturePositions,
			moveSteps,
		};
	} catch (err) {
		throw new Error(`${ConsoleMessage.TXT_PARSING_ERROR} ${err}`)
	}
}
