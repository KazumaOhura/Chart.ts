export interface Color {
}
export declare class RGB implements Color {
    private _red;
    private _green;
    private _blue;
    private readonly MIN_VALUE;
    private readonly MAX_VALUE;
    constructor(red: number, green: number, blue: number);
    /**
     * @deprecated
     */
    get rgb(): string;
    get red(): number;
    get green(): number;
    get blue(): number;
}
