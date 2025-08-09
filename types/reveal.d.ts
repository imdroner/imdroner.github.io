declare global {
    interface Window {
        Reveal: any;
        Highlight: any;
    }
}

export interface RevealOptions {
    hash?: boolean;
    transition?: string;
    controls?: boolean;
    progress?: boolean;
    center?: boolean;
    touch?: boolean;
    fragments?: boolean;
    help?: boolean;
    plugins?: any[];
}

export interface RevealInstance {
    initialize(): void;
    destroy(): void;
    next(): void;
    prev(): void;
    slide(indexh: number, indexv?: number): void;
}
