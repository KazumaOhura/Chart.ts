export class Color {
    
}


export type Red = Uint8ClampedArray;
export type Green = Uint8ClampedArray;
export type Blue = Uint8ClampedArray;

export class RGB extends Color {
    private _red: Red;
    private _green: Green;
    private _blue: Blue;

    constructor(red: Red, green: Green, blue: Blue) {
        super();
        this._red = red;
        this._green = green;
        this._blue = blue;
    }

    public get red(): Red{
        return this._red;
    }

    public get green(): Green{
        return this._green;
    }

    public get blue(): Blue{
        return this._blue;
    }
}
