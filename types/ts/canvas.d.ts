import { RGB } from './color';
import { Circle, Size, type Direction, Point } from './util';
export declare class Canvas {
    private _canvas;
    private _context;
    private _mousePos;
    constructor(size: Size);
    get element(): HTMLCanvasElement;
    private getMousePos;
    get mousePos(): Point;
    get size(): Size;
    drawCircle(circle: Circle, color: RGB): void;
    drawCircle(circle: Circle, color: RGB, angle: number): void;
    drawCircle(circle: Circle, color: RGB, startAngle: number, endAngle: number): void;
    drawHalfCircle(circle: Circle, color: RGB, direction: Direction): void;
}
