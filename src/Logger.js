const chalk = require('chalk');
const symbols = require('log-symbols');
const LogError = require('./util/LogError');

class Logger {
    constructor(options = {}) {

        const {
            useColors = true,
            useSymbols = true
        } = options

        /**
         * Whether to use symbols when logging.
         * @type {Boolean}
         */
        this.useSymbols = useSymbols;

        /**
         * Whether to use colors when logging.
         * @type {Boolean}
         */
        this.useColors = useColors;
    };

    async log(content) {
        if (!content) {
            throw new LogError(`NO_CONTENT`, `e`);
        };

        return console.log(`${this.useSymbols ? `${symbols.info} ` : ""} ${this.useColors ? `${chalk.blue(content)}` : `${content}`}`);
    };

    async info(content) {
        if (!content) {
            throw new LogError(`NO_CONTENT`, `e`);
        };

        return console.info(`${this.useSymbols ? `${symbols.info} ` : ""} ${this.useColors ? `${chalk.blue(content)}` : `${content}`}`);
    };

    async warn(content) {
        if (!content) {
            throw new LogError(`NO_CONTENT`, `e`);
        };

        return console.warn(`${this.useSymbols ? `${chalk.yellow('⚠')} ` : ""} ${this.useColors ? `${chalk.yellow(content)}` : `${content}`}`);
    };

    async error(content) {
        if (!content) {
            throw new LogError(`NO_CONTENT`, `e`);
        };

        return console.error(`${this.useSymbols ? `${symbols.error} ` : ""} ${this.useColors ? `${chalk.red(content)}` : `${content}`}`);
    };

    async success(content) {
        if (!content) {
            throw new LogError(`NO_CONTENT`, `e`);
        };

        return console.log(`${this.useSymbols ? `${symbols.success} ` : ""} ${this.useColors ? `${chalk.green(content)}` : `${content}`}`);
    };
};

module.exports = { Logger };