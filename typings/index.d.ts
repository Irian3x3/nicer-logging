declare module 'nicer-logging' {
    export class Logger {
        public constructor(options: LogOptions);

        public log(content: String): Promise<void>;
        public info(content: String): Promise<void>;
        public warn(content: String): Promise<void>; 
        public error(content: String): Promise<void>;
        public success(content: String): Promise<void>;
    }

    interface LogOptions {
        useSymbols?: Boolean;
        useColors?: Boolean;
    }
}