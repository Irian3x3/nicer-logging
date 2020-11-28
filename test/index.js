const { Logger } = require("../src/Logger");

const con = new Logger({ useSymbols: false });

con.warn(`warned`);
con.error(`errored`);
con.log(`logged`);
con.info(`infod`);
con.success(`successed`)