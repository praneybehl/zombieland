import inquirer from 'inquirer';

import { Answer, GetPostionQuestionParams } from '../models/interfaces';

export async function getPositionQuestion(params: GetPostionQuestionParams): Promise<Answer> {
	const { nameX, nameY, messageX, messageY, girdSize } = params;
	function validatePositionAxisInput(value: number) {
		if(girdSize && (isNaN(value) || value < 0 || value >= girdSize)) {
			return `Invalid input, please try a number between (0 - ${girdSize - 1})`;
		}
		return true;
	}
	return inquirer.prompt([
		{
			name: nameX,
			default: 1,
			type: 'input',
			message: messageX,
			validate: validatePositionAxisInput,
			filter: (value: number) => {
				return +value;
			}
		},
		{
			name: nameY,
			default: 2,
			type: 'input',
			message: messageY,
			validate: validatePositionAxisInput,
			filter: (value: number) => {
				return +value;
			}
		}
	]);
}
