import { showTitleAndBanner, showOutput, showInfoWithBg } from './utils';
import { Answer, InputChoicesValue, InputDataType, OutputType } from './models/interfaces';
import { inputTypeQuestion, inputFileQuestion } from './questions';
import { cliInputActions, awakeZombieAction } from './actions';
import { parseJsonFile, parseTxtFile } from './parser/input-file-parser';
import { ConsoleMessage } from './models/console-message';

export const ZombieLand = async function ZombieLand(): Promise<OutputType> {
	let inputData: InputDataType | any;
	showTitleAndBanner();

	const { inputType }: Answer = await inputTypeQuestion();
	if(inputType === InputChoicesValue.CLI) {
		inputData = await cliInputActions();
	} else if(inputType === InputChoicesValue.TXT) {
		const { inputFile } = await inputFileQuestion({
			message: 'Enter text file location. eg.: ./.sample-input/input.txt',
			ext: 'txt',
			defaultFile: './.sample-input/input.txt',
		});
		inputData = inputFile && parseTxtFile(inputFile);
	} else if(inputType === InputChoicesValue.JSON) {
		const { inputFile } = await inputFileQuestion({
			message: 'Enter json file location. eg.: ./.sample-input/input.json',
			ext: 'json',
			defaultFile: './.sample-input/input.json'
		});
		inputData = inputFile && parseJsonFile(inputFile);
	}

	showInfoWithBg(ConsoleMessage.START_BANNER);
	const outputData = await awakeZombieAction(inputData);
	showInfoWithBg(ConsoleMessage.STOP_BANNER);
	showOutput(outputData);
    return outputData
};
