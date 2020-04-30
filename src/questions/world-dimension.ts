import inquirer from 'inquirer';

import { Answer } from '../models/interfaces';

export async function getWorldDimensionQuestion(): Promise<Answer> {
	function validatePositionAxisInput(value: number) {
		if(isNaN(value)) {
			return `Invalid input, please try a valid number`;
		}
		return true;
	}
	return inquirer.prompt([
		{
			name: 'worldDimension',
			default: 4,
			type: 'input',
			message: 'Input Zombieland area size (N) for an NxN grid. eg.: 4:',
			validate: validatePositionAxisInput,
			filter: (value: number) => {
				return +value;
			}
		},
	]);
}
