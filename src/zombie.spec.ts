import sinon from 'sinon';
import { expect } from 'chai';
import { Zombie} from './zombie';
import * as validations from './validate';
import { validatePosition } from './validate';
import { ConsoleMessage } from './models/console-message';
import { ZombieMoves} from './models/interfaces';

describe('src/zombie', () => {
	let sandbox: sinon.SinonSandbox;
	let showErrorStub: sinon.SinonStub;
	let validatePositionStub: sinon.SinonStub;

	beforeEach(() => {
		sandbox = sinon.createSandbox();
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should always validate input position', () => {
		validatePositionStub = sandbox.stub(validations, 'validatePosition')
		const zombie = new Zombie({x: 1, y: 2});
		expect(validatePositionStub).to.be.called;
	});

	it('should return zombie position', () => {
		const pos = {x: 1, y: 2};
		const zombie = new Zombie(pos);
		expect(zombie.getPosition()).to.be.equal(pos);
	});

	it('can move Down', () => {
		const pos = {x: 1, y: 2};
		const expectedPosition = {x:1, y:3};
		const zombie = new Zombie(pos);
		expect(zombie.move(ZombieMoves.DOWN, 5)).to.eql(expectedPosition);
	});

	it('can move Up', () => {
		const pos = {x: 1, y: 2};
		const expectedPosition = {x:1, y:1};
		const zombie = new Zombie(pos);
		expect(zombie.move(ZombieMoves.UP, 5)).to.eql(expectedPosition);
	});

	it('can move Left', () => {
		const pos = {x: 1, y: 2};
		const expectedPosition = {x:0, y:2};
		const zombie = new Zombie(pos);
		expect(zombie.move(ZombieMoves.LEFT, 5)).to.eql(expectedPosition);
	});

	it('can move Right', () => {
		const pos = {x: 1, y: 2};
		const expectedPosition = {x:2, y:2};
		const zombie = new Zombie(pos);
		expect(zombie.move(ZombieMoves.RIGHT, 5)).to.eql(expectedPosition);
	});

	it('can move through the edge', () => {
		const pos = {x: 4, y: 4};
		const zombie = new Zombie(pos);
		expect(zombie.move(ZombieMoves.RIGHT, 5)).to.eql({x:0, y:4});
		expect(zombie.move(ZombieMoves.DOWN, 5)).to.eql({x:0, y:0});
	});
});

