const Messages = {
    NO_CONTENT: "No content was provided."
};

/**
 * A logging error
 * @extends {Error}
 */
module.exports = class LogError extends Error {
    constructor(key, ...message) {
        if (!Messages[key]) {
            throw new TypeError(`Key ${key} does not exist`);
        };
        const msg = typeof Messages[key] == 'function' ? Messages[key](...message) : Messages[key];

        super(msg);

        this.key = key;
    };

    get name() {
        return `LogError [${this.key}]`
    };
};