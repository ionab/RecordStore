var assert = require("assert");
var Record = require("../record.js");
var RecordStore = require("../record_store.js");

describe("RecordStore", function(){
  var record;
  var recordStore;

  beforeEach(function(){
    record = new Record("Artist1", "Title1", "Rock", 19.99)
    recordStore = new RecordStore("Kelsie's Record Store", "Glasgow")
  })

  it("should have a name", function(){
    assert.strictEqual(recordStore.name, "Kelsie's Record Store")
  })
  it("should have a name", function(){
    assert.strictEqual(recordStore.city, "Glasgow")
  })
  it("should have an inventory which starts empty", function(){
    assert.strictEqual(recordStore.inventory.length, 0)
  })
  it("should have a balance which starts at zero", function(){
    assert.strictEqual(recordStore.balance, 0)
  })
})
