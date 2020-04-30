import sinon from 'sinon';
import { expect } from 'chai';
import * as logger from './utils';
import * as questions from './questions';
import { InputChoicesValue } from './models/interfaces';
import * as actions from './actions';
import { ZombieLand } from './zombieland';
import { ConsoleMessage } from './models/console-message';

describe('src/zombiland', () => {
	let sandbox: sinon.SinonSandbox;
	let inputTypeQuestionStub: sinon.SinonStub;
	let inputFileQuestionStub: sinon.SinonStub;
	let cliInputActionsStub: sinon.SinonStub;
	let awakeZombieActionStub: sinon.SinonStub;
	let showTitleAndBannerStub: sinon.SinonStub;
	let simpleLogStub: sinon.SinonStub;
	let showInfoWithBgStub: sinon.SinonStub;
	let showOutputStub: sinon.SinonStub;

	const mockAnswer: any = {
		inputType: InputChoicesValue.CLI,
		worldDimension: 4,
		zombiePosition: {
			x: 2,
			y: 4
		},
		creaturesPosition: [
			{
				x: 2,
				y: 4
			}
		],
		moveStep: 'D',
		addMore: false
	};

	const mockOutput = {
		zombiesScore: 3,
		zombiesPositions:
			[{ x: 3, y: 0 }, { x: 2, y: 1 }, { x: 1, y: 0 }, { x: 0, y: 0 }],
		creaturePositions: []
	};

	beforeEach(() => {
		sandbox = sinon.createSandbox();
		cliInputActionsStub = sandbox.stub(actions, 'cliInputActions').resolves(mockAnswer);
		awakeZombieActionStub = sandbox.stub(actions, 'awakeZombieAction').resolves(mockOutput);
		showTitleAndBannerStub = sandbox.stub(logger, 'showTitleAndBanner');
		simpleLogStub = sandbox.stub(logger, 'simpleLog');
		showInfoWithBgStub = sandbox.stub(logger, 'showInfoWithBg');
		showOutputStub = sandbox.stub(logger, 'showOutput');
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should always call showTitleAndBanner and inputTypeQuestion', async () => {
		inputTypeQuestionStub = sandbox.stub(questions, 'inputTypeQuestion').resolves(mockAnswer);
		await ZombieLand();
		expect(showTitleAndBannerStub).to.be.calledOnce;
		expect(inputTypeQuestionStub).to.be.calledOnce;
	});

	it('should call cliInputActionsStub', async () => {
		inputTypeQuestionStub = sandbox.stub(questions, 'inputTypeQuestion').resolves(mockAnswer);
		await ZombieLand();
		expect(cliInputActionsStub).to.be.calledOnce;
	});

	it('should call inputFileQuestion when text file is selected', async () => {
		inputTypeQuestionStub = sandbox.stub(questions, 'inputTypeQuestion').resolves({inputType: InputChoicesValue.TXT});
		inputFileQuestionStub = sandbox.stub(questions, 'inputFileQuestion').resolves({inputFile: '.sample-input/input.txt'});
		await ZombieLand();
		expect(inputFileQuestionStub).to.be.calledOnce;
	});

	it('should call inputFileQuestion when json file is selected', async () => {
		inputTypeQuestionStub = sandbox.stub(questions, 'inputTypeQuestion').resolves({inputType: InputChoicesValue.JSON});
		inputFileQuestionStub = sandbox.stub(questions, 'inputFileQuestion').resolves({inputFile: '.sample-input/input.json'});
		await ZombieLand();
		expect(inputFileQuestionStub).to.be.calledOnce;
	});

	it('should always call showInfoWithBg twice', async () => {
		inputTypeQuestionStub = sandbox.stub(questions, 'inputTypeQuestion').resolves(mockAnswer);
		await ZombieLand();
		expect(showInfoWithBgStub).to.be.calledTwice;
		expect(showInfoWithBgStub).to.be.calledWithMatch(ConsoleMessage.START_BANNER);
		expect(showInfoWithBgStub).to.be.calledWithMatch(ConsoleMessage.STOP_BANNER);
	});

	it('should always call showOutput', async () => {
		inputTypeQuestionStub = sandbox.stub(questions, 'inputTypeQuestion').resolves(mockAnswer);
		await ZombieLand();
		expect(showOutputStub).to.be.called;
	});
});
