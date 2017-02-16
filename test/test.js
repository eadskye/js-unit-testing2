var expect= require('chai').expect;
var code = require('../main.js');

describe('greeting', function(){
  it('accepts only one argument', function(){
    //write assertions
    expect(code.greeting('Jennie', 'Aaron')).to.equal('Only one argument, fool!');
  });
  it('input is a string', function(){
    expect(code.greeting(9)).to.equal('Pass me a string fool!');
});
