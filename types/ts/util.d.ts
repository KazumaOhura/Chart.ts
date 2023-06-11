export declare class Point {
    private _x;
    private _y;
    constructor(x: number, y: number);
    get x(): number;
    get y(): number;
}
export declare class Size {
    private _width;
    private _height;
    constructor(width: number, height: number);
    get width(): number;
    get height(): number;
}
export declare class Circle {
    private _radius;
    private _pos;
    constructor(radius: number, pos: Point);
    get pos(): Point;
    get radius(): number;
    get area(): number;
    get circumference(): number;
}
export declare class Rect {
    private _origin;
    private _size;
    /**
     * @constructor
     * @param pos Center of rectangle
     * @param size Size of rectangle
     */
    constructor(pos: Point, size: Size);
    get originPos(): Point;
    get center(): Point;
    get size(): Size;
}
export declare type Direction = "up" | "down" | "left" | "right";
