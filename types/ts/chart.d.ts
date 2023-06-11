export declare type GraphType = "bar" | "line" | "circle" | "band";
export declare class ChartElement extends HTMLElement {
    private _canvas;
    private _size;
    constructor();
    get width(): number;
    get height(): number;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(): void;
    adoptedCallback(): void;
    test(): void;
    add<T>(graph: GraphType, data: Array<T>): void;
}
