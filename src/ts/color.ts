export interface Color {
    
}

export class RGB implements Color{
    private _red: number;
    private _green: number;
    private _blue: number;
    private readonly MIN_VALUE:number = 0;
    private readonly MAX_VALUE:number = 255;

    constructor(red: number, green: number, blue: number) {
        if(red < this.MIN_VALUE || green < this.MIN_VALUE || blue < this.MIN_VALUE) throw new RangeError("Arguments are under 0");
        if(red > this.MAX_VALUE || green > this.MAX_VALUE || blue > this.MAX_VALUE) throw new RangeError("Arguments are over 255");
        this._red = red;
        this._green = green;
        this._blue = blue;
    }

    /**
     * @deprecated
     */
    public get rgb(): string{
        return "";
        //return `rgba(${},${},${this.},${0})`;
    }

    public get red(): number{
        return this._red;
    }

    public get green(): number{
        return this._green;
    }

    public get blue(): number{
        return this._blue;
    }
}
