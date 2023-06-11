export class Point {
    private _x: number
    private _y: number

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public get x(): number{
        return this._x;
    }

    public get y(): number{
        return this._y;
    }
}

export class Size {
    private _width: number
    private _height: number

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    public get width(): number{
        return this._width;
    }

    public get height(): number{
        return this._height;
    }
}

export class Circle{
    private _radius:number
    private _pos:Point
    
    constructor(radius:number, pos:Point){
        this._radius = radius;
        this._pos = pos;
    }

    public get pos(): Point{
        return this._pos;
    }

    public get radius(): number{
        return this._radius;
    }

    public get area(): number{
        return this._radius ** 2 * Math.PI;
    }

    public get circumference(): number{
        return this._radius * 2 * Math.PI;
    }
}

export class Rect {
    private _origin:Point
    private _size:Size

    /**
     * @constructor
     * @param pos Center of rectangle
     * @param size Size of rectangle
     */
    constructor(pos:Point, size:Size){
        this._origin = new Point(pos.x - (size.width / 2), pos.y - (size.height / 2));
        this._size = size;
    }

    public get originPos(): Point{
        return this._origin;
    }

    public get center(): Point{
        return new Point(this._origin.x + (this._size.width / 2), this._origin.y + (this._size.height / 2));
    }

    public get size(): Size{
        return this._size;
    }
}

export declare type Direction = "up" | "down" | "left" | "right"
