export const plugins: any[];
export declare const entry: string;
export declare namespace output {
    const path: any;
    const filename: string;
    const library: string;
    const libraryTarget: string;
}
export declare namespace module {
    const rules: {
        test: RegExp;
        loader: string;
    }[];
}
export declare namespace node {
    export const fs: string;
    export const dns: string;
    export const tls: string;
    export const child_process: string;
    export const dgram: string;
    export const __dirname: boolean;
    export const process: boolean;
    const path_1: string;
    export { path_1 as path };
    export const Buffer: boolean;
    export const zlib: string;
}
