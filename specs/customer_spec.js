var assert = require("assert");
var Record = require("../record.js");
var RecordStore = require("../record_store.js");
var Customer = require("../customer.js");

describe("Customer", function(){

  var record1;
  var record2;
  var record3;
  var recordStore;
  var customer;
  var record4;
  var record5;
  var record6;

  beforeEach(function(){
    customer = new Customer("Kelsie")
    recordStore = new RecordStore("Kelsie's Record Store", "Glasgow")
    record1 = new Record("Artist1", "Title1", "Rock", 19.99)
    record2 = new Record("Artist1", "Title1", "Rock", 19.99)
    record3 = new Record("Artist1", "Title1", "Rock", 9.99)

    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
  })

  it ('should have name', function(){
  assert.strictEqual(customer.name, "Kelsie");
  })

  it ('should be able to buy records //const', function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    assert.strictEqual(customer.collection.length, 3)})
  it ('should be able to return records //const', function(){
    customer.buyRecord(record1);
    assert.strictEqual(customer.collection.length, 1);
    customer.returnRecord(record1);
    assert.strictEqual(customer.collection.length, 0)})
  it ('should have cash which starts at fifty //const', function(){
    assert.strictEqual(customer.cash, 50)})
  it ('should have collection which starts as empty //const', function(){
    assert.strictEqual(customer.collection.length, 0)})
  it ('should not be able to buy record if they cant afford it', function(){
    record4 = new Record("Artist1", "Title1", "Rock", 100)
    customer.buyRecord(record4);
  assert.strictEqual(customer.collection.length, 0)})
  it ('should decrease cash when record bought', function(){
    customer.buyRecord(record1);
    assert.strictEqual(customer.cash, 30.01);})
  it ('should increase cash when record returned', function(){
    customer.buyRecord(record1);
    assert.strictEqual(customer.cash, 30.01);
    customer.returnRecord(record1);
    assert.strictEqual(customer.cash, 50)})
  it ('should be able to view the total value of record collection', function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    assert.strictEqual(customer.collectionValue(), 49.97)})
  it ('should be able to view the total value of record collection by genre', function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    assert.strictEqual(customer.collectionValueByGenre("Rock"), 49.97)})
  it ('should be able to sort their records by value', function(){

    record5 = new Record("Artist1", "Title1", "Rock", 4)
    customer.buyRecord(record5);
    record6 = new Record("Artist1", "Title1", "Rock", 7)
    customer.buyRecord(record6);
    assert.strictEqual(customer.recordsByValue()[0], record6)})
  // xit ('should be able to see their most valued record', function(){
  // assert.strictEqual(,)})
  // xit ('should be able to compare value of their collection with another collection', function(){
  // assert.strictEqual(,)})

})
