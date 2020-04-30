import sinon from 'sinon';
import { expect } from 'chai';
import * as logger from '../utils';
import { awakeZombieAction } from './awake-zombie';
import { InputDataType } from '../models/interfaces';

describe('src/actions/awake-zombie', () => {
	let sandbox: sinon.SinonSandbox;
	let showSuccessStub: sinon.SinonStub;
	const mockData: InputDataType = {
		worldDimension: 4,
		zombiePosition: {
			x: 2,
			y: 1
		},
		creaturePositions: [
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 2
			},
			{
				x: 3,
				y: 1
			}
		],
		moveSteps: ['D', 'L', 'U', 'U', 'R', 'R']
	};

	beforeEach(() => {
		sandbox = sinon.createSandbox();
		showSuccessStub = sandbox.stub(logger, 'showSuccess');
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should call showSuccess when bite a creature', async () => {
		await awakeZombieAction(mockData);
		expect(showSuccessStub).to.be.calledThrice;
		expect(showSuccessStub).to.be.calledWithMatch('Zombies scored at position: x: 1, y: 2');
		expect(showSuccessStub).to.be.calledWithMatch('Zombies scored at position: x: 0, y: 1');
		expect(showSuccessStub).to.be.calledWithMatch('Zombies scored at position: x: 3, y: 1');
	});

	it('should calculate zombiesScore correctly', async () => {
		const output = await awakeZombieAction(mockData);
		expect(output.zombiesScore).to.be.equal(3);
	});

	it('should calculate zombiesPositions correctly', async () => {
		const output = await awakeZombieAction(mockData);
		expect(output.zombiesPositions).to.eql([
			{ x: 3, y: 0 },
			{ x: 2, y: 1 },
			{ x: 1, y: 0 },
			{ x: 0, y: 0 },
		]);
	});

	it('should calculate creaturePositions correctly', async () => {
		const output = await awakeZombieAction(mockData);
		expect(output.creaturePositions).to.eql([]);
	});

});

