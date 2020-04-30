import inquirer from 'inquirer';

import { Answer, GetPostionQuestionParams } from '../models/interfaces';

export async function addMoreQuestion(message: string): Promise<{ addMore: boolean }> {

	return inquirer.prompt([
		{
			name: 'addMore',
			default: true,
			type: 'confirm',
			message
		}
	]);
}
