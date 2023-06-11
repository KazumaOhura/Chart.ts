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
    drawCircle(circle: Circle): void;
    drawCircle(circle: Circle, angle: number): void;
    drawCircle(circle: Circle, startAngle: number, endAngle: number): void;
    drawHalfCircle(circle: Circle, direction: Direction): void;
}
