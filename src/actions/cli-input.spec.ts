import sinon from 'sinon';
import { expect } from 'chai';
import * as questions from '../questions';
import * as logger from '../utils';
import { ConsoleMessage } from '../models/console-message';
import { cliInputActions } from './cli-input';

describe('src/actions/cli-input', () => {
    let sandbox: sinon.SinonSandbox;
    let getPositionQuestionStub: sinon.SinonStub;
    let getWorldDimensionQuestionStub: sinon.SinonStub;
    let getZombieMovesQuestionStub: sinon.SinonStub;
    let addMoreQuestionStub: sinon.SinonStub;
    let simpleLogStub: sinon.SinonStub;

    const mockAnswer = {
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
		addMore: false,
	};

    beforeEach(() => {
        sandbox = sinon.createSandbox();
		getWorldDimensionQuestionStub = sandbox.stub(questions, 'getWorldDimensionQuestion').resolves(mockAnswer);
		getZombieMovesQuestionStub = sandbox.stub(questions, 'getZombieMovesQuestion').resolves(mockAnswer);
		addMoreQuestionStub = sandbox.stub(questions, 'addMoreQuestion').resolves(mockAnswer);
		simpleLogStub = sandbox.stub(logger, 'simpleLog')
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should always call getWorldDimensionQuestionStub', async () => {
		getPositionQuestionStub = sandbox.stub(questions, 'getPositionQuestion').resolves(mockAnswer);
		await cliInputActions();
        expect(getWorldDimensionQuestionStub).to.be.called;
    });

    it('should always call getPositionQuestionStub', async () => {
		getPositionQuestionStub = sandbox.stub(questions, 'getPositionQuestion').resolves(mockAnswer);
		await cliInputActions();
        expect(getPositionQuestionStub).to.be.called;
    });

    it('should always call getZombieMovesQuestionStub', async () => {
		getPositionQuestionStub = sandbox.stub(questions, 'getPositionQuestion').resolves(mockAnswer);
		await cliInputActions();
        expect(getZombieMovesQuestionStub).to.be.called;
    });

    it('should always call addMoreQuestionStub', async () => {
		getPositionQuestionStub = sandbox.stub(questions, 'getPositionQuestion').resolves(mockAnswer);
		await cliInputActions();
        expect(addMoreQuestionStub).to.be.called;
    });

    it('should call simpleLog', async () => {
		getPositionQuestionStub = sandbox.stub(questions, 'getPositionQuestion').resolves(mockAnswer);
		await cliInputActions();
        expect(simpleLogStub).to.be.calledWithMatch(`\n${ConsoleMessage.ZOMBIE_POSITION_INPUT}`)
        expect(simpleLogStub).to.be.calledWithMatch(`\n${ConsoleMessage.CREATURE_MSG}`)
        expect(simpleLogStub).to.be.calledWithMatch(ConsoleMessage.CREATURE_POSITION_INPUT)
        expect(simpleLogStub).to.be.calledWithMatch(ConsoleMessage.ZOMBIE_DIRECTION_MSG)
    });
});

