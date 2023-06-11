import { Canvas } from './canvas';
import { RGB } from './color';

import { Circle, Point, Size } from './util';

export declare type GraphType = "bar" | "line" | "circle" | "band"

export class ChartElement extends HTMLElement {
    private _canvas: Canvas = new Canvas(new Size(0, 0));
    private _size: Size = new Size(0, 0);

    constructor() {
        super();
        let width = this.getAttribute("width");
        let height = this.getAttribute("height");

        if (!width || !height) {
            return;
        }

        this._size = new Size(parseInt(width), parseInt(width));

        this._canvas = new Canvas(this._size);
        //this.appendChild(this._canvas.element);
    }

    public get width(): number {
        return this._size.width;
    }

    public get height(): number {
        return this._size.height;
    }

    public connectedCallback() {

    }

    public disconnectedCallback() {

    }

    static get observedAttributes() {
        return ['width', 'height'];
    }

    public attributeChangedCallback() {

    }

    public adoptedCallback() {

    }

    public test() { console.log("TEST") }

    public add<T>(graph: GraphType, data: Array<T>) {
        console.log(data);
        switch (graph) {
            case 'bar':
                this._canvas.drawCircle(new Circle(50, new Point(100, 100)), new RGB(0, 255, 0), 360);
                break;
            case 'line':
                break;
            case 'circle':
                break;
            case 'band':
                break;
        }
    }
}

customElements.define("x-chart", ChartElement);
