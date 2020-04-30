import inquirer from 'inquirer';

import { Answer, Interfaces, ZombieMoves } from '../models/interfaces';

export async function getZombieMovesQuestion(): Promise<Answer> {
	const listOfInputs: Interfaces[] = [
		{name: 'DOWN', value: ZombieMoves.DOWN},
		{name: 'UP', value: ZombieMoves.UP},
		{name: 'LEFT', value: ZombieMoves.LEFT},
		{name: 'RIGHT', value: ZombieMoves.RIGHT},
	];

	return inquirer.prompt([
		{
			name: 'moveStep',
			default: 1,
			type: 'list',
			message: 'Select a Zombie move direction',
			choices: listOfInputs,
		}
	]);
}
