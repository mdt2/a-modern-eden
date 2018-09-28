const chai = require('chai');
const hbs = require('handlebars');
const ifProd = require('../index.js');

const expect = chai.expect;

// don't use arrow functions https://mochajs.org/#arrow-functions
describe('ifProd hbs helper', function () {
  it('ouputs nothing because the env is not prod', function () {
    const source = `
{{#ifProd}}
  foo
{{/ifProd}}
`;

    hbs.registerHelper('ifProd', ifProd);
    const compiled = hbs.compile(source);

    expect(compiled()).to.equal('\n');
  });
});
