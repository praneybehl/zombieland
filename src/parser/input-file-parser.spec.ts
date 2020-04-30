import sinon from 'sinon';
import { expect } from 'chai';
import * as logger from '../utils';
import { parseTxtFile, parseJsonFile } from './input-file-parser';
import * as validators from '../validate';

describe('src/parser/input-file-parser', () => {
    let sandbox: sinon.SinonSandbox;
    let showErrorStub: sinon.SinonStub;
    let validatePositionStud: sinon.SinonStub;
    let validMoveStepsStud: sinon.SinonStub;

    beforeEach(() => {
        sandbox = sinon.createSandbox();

    });

    afterEach(() => {
        sandbox.restore();
    });

    it('parseTxtFile - should correctly parse text file input',  () => {
    	const result = parseTxtFile('./.sample-input/input.txt');
		const expected = {
			worldDimension: 4,
			zombiePosition: { x: 2, y: 1 },
			creaturePositions: [ { x: 0, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 1 } ],
			moveSteps: [ 'D', 'L', 'U', 'U', 'R', 'R' ]
		};
		expect(result).to.be.eql(expected);
    });

    it('parseTxtFile - should showError for file with incorrect text input',  () => {
		showErrorStub = sandbox.stub(logger, 'showError');
		parseTxtFile('./.sample-input/incorrectInput.txt');
		expect(showErrorStub).to.be.called;
    });

	it('parseJsonFile - should correctly parse json file input',  () => {
		validatePositionStud = sandbox.stub(validators, 'validatePosition').resolves(true);
		validMoveStepsStud = sandbox.stub(validators, 'validMoveSteps').resolves(true);
		const result = parseJsonFile('./.sample-input/input.json');
		const expected = {
			worldDimension: 4,
			zombiePosition: { x: 2, y: 1 },
			creaturePositions: [ { x: 0, y: 1 }, { x: 1, y: 2 }, { x: 3, y: 1 } ],
			moveSteps: [ 'D', 'L', 'U', 'U', 'R', 'R' ]
		};
		expect(result).to.be.eql(expected);
	});

	it('parseTxtFile - should showError for file with incorrect json input',  () => {
		showErrorStub = sandbox.stub(logger, 'showError');
		const result = parseTxtFile('./.sample-input/incorrectInput.json');
		expect(showErrorStub).to.be.called;
	});
});

