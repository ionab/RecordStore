var assert = require("assert");
var Record = require("../record.js")

describe("Record", function(){

  var record;

  beforeEach(function(){
    record = new Record("Artist1", "Title1", "Rock", 19.99)
  })

  it("should have an artist", function(){
    assert.strictEqual(record.artist, "Artist1")
  })
  it("should have a title", function(){
    assert.strictEqual(record.title, "Title1")
  })
  it("should have a genre", function(){
    assert.strictEqual(record.genre, "Rock")
  })
  it("should have a price", function(){
    assert.strictEqual(record.price, 19.99)
  })
  it("should return the properties as a string", function(){
    assert.strictEqual(record.printPropertiesAsString(), "Artist: Artist1, Title: Title1, Genre: Rock, Price: 19.99")
  })

})
