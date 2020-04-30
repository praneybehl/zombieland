import inquirer from 'inquirer';
import { Answer, GetInputFileQuestionParams } from '../models/interfaces';
import { validateInputFile } from '../validate';

export async function inputFileQuestion({message, ext, defaultFile}: GetInputFileQuestionParams): Promise<Answer> {
    return inquirer.prompt([{
        name: 'inputFile',
        type: 'input',
		default: defaultFile,
        message,
		validate: (value) => {
        	if(validateInputFile(value, ext)) {
        		return true;
			}
        	return `Invalid file path, please check the path and file extension. .txt(Text File), .json(JSON file)`
		}
    }]);
}
