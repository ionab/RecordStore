var assert = require("assert");
var Record = require("../record.js");
var RecordStore = require("../record_store.js");

describe("RecordStore", function(){
  var record1;
  var record2;
  var record3;
  var recordStore;

  beforeEach(function(){
    recordStore = new RecordStore("Kelsie's Record Store", "Glasgow")
    var record1 = new Record("Artist1", "Title1", "Rock", 19.99)
    var record2 = new Record("Artist1", "Title1", "Rock", 19.99)
    var record3 = new Record("Artist1", "Title1", "Rock", 19.99)
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
  it("should be able to add records to inventory", function(){
    
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);

    assert.strictEqual(recordStore.inventory.length, 3)
  })
})
