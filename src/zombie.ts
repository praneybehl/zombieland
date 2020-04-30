import { Position, ZombieMoves, ZombieType } from './models/interfaces';
import { validatePosition } from './validate';

export class Zombie implements ZombieType {
	position: Position;
	constructor(pos: Position) {
		validatePosition(pos);
		this.position = pos;
	}

	public getPosition() {
		return this.position;
	}

	public move(direction: ZombieMoves, grid: number): Position {
		const { x, y } = this.position;
		const gridSize = grid - 1;
		switch (direction) {
			case ZombieMoves.UP:
				y === 0 ? this.position.y = gridSize
					: this.position.y -= 1;
				break;
			case ZombieMoves.DOWN:
				y === gridSize ? this.position.y = 0
					: this.position.y += 1;
				break;
			case ZombieMoves.LEFT:
				x === 0 ? this.position.x = gridSize
					: this.position.x -= 1;
				break;
			case ZombieMoves.RIGHT:
				x === gridSize ? this.position.x = 0
					: this.position.x += 1;
				break;
			default:
		}
		return this.position;
	}
}
