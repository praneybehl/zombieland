import { expect } from 'chai';
import { validatePosition, validateInputFile, validMoveSteps } from './index';

describe('src/validate/index', () => {
	it('validatePosition', async () => {
		const result = validatePosition({x: 1, y: 3});
		expect(result).to.be.true;
	});

	it('validMoveSteps - to be true for valid move', async () => {
		const result = validMoveSteps(['D', 'L']);
		expect(result).to.be.true;
	});

	it('validMoveSteps - to be false for invalid moves', async () => {
		const result = validMoveSteps(['D', 'B']);
		expect(result).to.be.false;
	});

	it('validateInputFile - returns true if file exists', async () => {
		// fsStub = sandbox.stub(fs, 'existsSync').resolves(true)
		const result = validateInputFile('./.sample-input/input.txt', 'txt');
		expect(result).to.be.true;
	});

	it('validateInputFile - returns false if file doesn\'t exists', async () => {
		const result = validateInputFile('./.sample-input/nput.txt', 'txt');
		expect(result).to.be.false;
	});
});

