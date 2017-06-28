export declare class Server {
    port: number;
    host: string;
    publicDir: string;
    printLog: boolean;
    private app;
    private model;
    private state;
    private actions;
    constructor(model: any, state: any, actions: any, port?: number, host?: string, publicDir?: string, printLog?: boolean);
    start(): any;
    stop(): void;
}
