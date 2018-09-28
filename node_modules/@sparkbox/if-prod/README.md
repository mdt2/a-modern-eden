# ifProd

[![CircleCI](https://circleci.com/gh/sparkbox/ifProd-helper/tree/master.svg?style=svg)](https://circleci.com/gh/sparkbox/ifProd-helper/tree/master)

A hbs helper that renders a block if `NODE_ENV=production`.

## Usage

Register the partial with handlebars, typically like this:

```js
const hbs = require('handlebars');
const ifProd = require('@sparkbox/if-prod');

hbs.registerHelper('ifProd', ifProd);
```

Once registered the helper will be available to use in any `hbs` file like so:

```hbs
{{#ifProd}}
  <script src="src/prod-script.js"></script>
{{/ifProd}}
```
