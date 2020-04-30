import inquirer from 'inquirer';

import { Answer, InputChoicesValue, Interfaces } from '../models/interfaces';

export async function inputTypeQuestion(): Promise<Answer> {
    const listOfInputs: Interfaces[] = [
        {name: 'Interactive command-line input', value: InputChoicesValue.CLI},
        {name: 'Text file', value: InputChoicesValue.TXT},
        {name: 'JSON file', value: InputChoicesValue.JSON},
    ];

    return inquirer.prompt([{
        name: 'inputType',
        type: 'list',
        message: 'Please select your preferred input method:',
        choices: listOfInputs,
    }]);
}
