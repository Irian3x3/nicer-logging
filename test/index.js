const { Logger } = require('../src/');

const con = new Logger({ useSymbols: false });

con.warn(); // Errored: `LogError [NO_CONTENT]: No content was provided.`
con.error(`errored`); // Success
con.log(`logged`); // Success
con.info(`infod`); // Success
con.success(`successed`) // Success