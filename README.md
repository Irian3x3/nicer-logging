# Nicer Logging
*A simple yet nicer logging system.*
## What does it have?
It has symbols and colors (which can be disabled).
## Example
### JS
```js
const nice = require('nicer-logging');

const log = new nice.Logger();

log.info(`Hello!`)
```
### TypeScript and Modules
```ts
import Nice from 'nicer-logging';

const log = new Nice.Logger();

log.info(`Hello!`)
```
## Documentation
### Constructor
```js
new Logger(options)
```
#### Options
| Parameter  | Type    | Description                         | Optional  | Default |
|------------|---------|-------------------------------------|-----------|---------|
| useSymbols | Boolean | Whether to use symbols when logging | Yes       | true    |
| useColors  | Boolean | Whether to use colors when logging  | Yes       | true    |
### Methods
`.info(content)`
| Parameter | Type   | Description | Optional |
|-----------|--------|-------------|----------|
| content   | String | What to log | &times;  |
---
`.warn(content)`
| Parameter | Type   | Description | Optional |
|-----------|--------|-------------|----------|
| content   | String | What to log | &times;  |
---
`.error(content)`
| Parameter | Type   | Description | Optional |
|-----------|--------|-------------|----------|
| content   | String | What to log | &times;  |
---
`.log(content)`
| Parameter | Type   | Description | Optional |
|-----------|--------|-------------|----------|
| content   | String | What to log | &times;  |
---
`.success(content)`
| Parameter | Type   | Description | Optional |
|-----------|--------|-------------|----------|
| content   | String | What to log | &times;  |
---
#### *Yeah literally everything is the same*