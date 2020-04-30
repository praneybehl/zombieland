export interface Answer {
    inputType?: InputChoicesValue;
    inputFile?: string;
    worldDimension?: number;
    zombiePosition?: Position;
    creaturesPosition?: Position[];
    moveStep?: string;
}

export interface Position {
	x: number,
	y: number
}

export enum ZombieMoves {
	DOWN = 'D',
	UP = 'U',
	LEFT = 'L',
	RIGHT = 'R'
}

export interface Interfaces {
    name: string;
    value: InputChoicesValue |
           number |
           Position |
           Position[] |
           string;
}

export enum InputChoicesValue {
    CLI = 'CLI',
    TXT = 'TXT',
    JSON = 'JSON',
}

export type InputTypeText = string[];

export interface InputDataType {
	worldDimension: number;
	zombiePosition: Position;
	creaturePositions: Position[];
	moveSteps: string[];
}

export interface GetPostionQuestionParams {
	nameX: string;
	nameY: string;
	messageX: string;
	messageY: string;
	girdSize?: number;
}

export interface ZombieType {
	position: Position;
	getPosition(): Position;
	move(direction: ZombieMoves, gridSize: number): Position;
}

export interface OutputType {
	zombiesScore: number;
	zombiesPositions: Position[]
	creaturePositions: Position[]
}

export interface GetInputFileQuestionParams {
	message: string;
	ext: string;
	defaultFile?: string;
}
