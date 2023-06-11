import { RGB } from './color';
import { Circle, Size, type Direction, Point } from './util'

export class Canvas {
    private _canvas: HTMLCanvasElement
    private _context: CanvasRenderingContext2D | null
    private _mousePos: Point

    constructor(size: Size) {
        this._canvas = document.createElement('canvas');
        this._canvas.width = size.width;
        this._canvas.height = size.height;
        this._context = this._canvas?.getContext('2d');
        this._mousePos = new Point(0, 0);
        document.addEventListener('mousemove', (event) => {
            this._mousePos = this.getMousePos(event);
        })
    }

    public get element(): HTMLCanvasElement {
        return this._canvas;
    }

    private getMousePos(event: MouseEvent): Point {
        let rect = this._canvas.getBoundingClientRect();
        return new Point(event.clientX - rect.left, event.clientY - rect.top);
    }

    public get mousePos(): Point {
        return this._mousePos;
    }

    public get size() {
        return new Size(this._canvas.width, this._canvas.height);
    }

    public drawCircle(circle: Circle, color: RGB): void;
    public drawCircle(circle: Circle, color: RGB, angle: number): void;
    public drawCircle(circle: Circle, color: RGB, startAngle: number, endAngle: number): void;

    public drawCircle(circle: Circle, color: RGB, startAngle: number = 0, endAngle: number = 360): void {
        if (!this._context) {
            throw new ReferenceError("_context is null.");
        }
        this._context.arc(circle.pos.x, circle.pos.y, circle.radius, startAngle / 180 * Math.PI, endAngle / 180 * Math.PI, true);
        this._context.strokeStyle = `rgb(${color.red.toString()}, ${color.green.toString()}, ${color.blue.toString()})`
        this._context.fill();
    }

    public drawHalfCircle(circle: Circle, color: RGB, direction: Direction) {
        switch (direction) {
            case 'up':
                this.drawCircle(circle, color, 270, 90);
                break;
            case 'down':
                this.drawCircle(circle, color, 90, 270);
                break;
            case 'left':
                this.drawCircle(circle, color, 180, 0);
                break;
            case 'right':
                this.drawCircle(circle, color, 0, 180);
                break;
        }
    }

}
