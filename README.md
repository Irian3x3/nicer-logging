# Nicer Logging
*A simple yet nicer logging system.*
## Installation
```sh
# Install with NPM
npm i nicer-logging
```
## What does it have?
It has symbols and colors (which can be disabled).
## Example
### JS
```js
const nice = require('nicer-logging');

const log = new nice.Logger();

log.info(`Hello!`);
```
### TypeScript and Modules
```ts
import Nice from 'nicer-logging';

const log = new Nice.Logger();

log.info(`Hello!`);
```
## Documentation
### Constructor
```js
new Logger(options)
```
#### Options
| Parameter  | Type    | Description                         | Optional  | Default |
|------------|---------|-------------------------------------|-----------|---------|
| useSymbols | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to use symbols when logging | &check;   | true    |
| useColors  | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to use colors when logging  | &check;   | true    |
### Methods
`.info(content)`
| Parameter | Type   | Description | Optional |
|-----------|--------|-------------|----------|
| content   | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | What to log | &times;  |
---
`.warn(content)`
| Parameter | Type   | Description | Optional |
|-----------|--------|-------------|----------|
| content   | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | What to log | &times;  |
---
`.error(content)`
| Parameter | Type   | Description | Optional |
|-----------|--------|-------------|----------|
| content   | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | What to log | &times;  |
---
`.log(content)`
| Parameter | Type   | Description | Optional |
|-----------|--------|-------------|----------|
| content   | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | What to log | &times;  |
---
`.success(content)`
| Parameter | Type   | Description | Optional |
|-----------|--------|-------------|----------|
| content   | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | What to log | &times;  |
---
###### *Yeah literally everything is the same*