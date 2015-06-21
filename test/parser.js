var assert = require('assert');
var whatsapp = require('..');

describe('parser()', function(){
  var parser;
  before(function(){
    parser = "test"
  })

  it('should export some function', function(){
    assert(typeof whatsapp.parse, 'function');
  })
});
