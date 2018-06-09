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
  beforeEach(function(){
    customer = new Customer("Kelsie")
    recordStore = new RecordStore("Kelsie's Record Store", "Glasgow")
    record1 = new Record("Artist1", "Title1", "Rock", 19.99)
    record2 = new Record("Artist1", "Title1", "Rock", 19.99)
    record3 = new Record("Artist1", "Title1", "Rock", 19.99)

    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
  })
})
it ('should have name', function(){
assert.strictEquals(,)}
xit ('should be able to buy records //const', function(){
assert.strictEquals(,)}
xit ('should be able to return records //const', function(){
assert.strictEquals(,)}
xit ('should have cash which starts at fifty //const', function(){
assert.strictEquals(,)}
xit ('should have collection which starts as empty //const', function(){
assert.strictEquals(,)}
xit ('should not be able to buy record if they cant afford xit', function(){
assert.strictEquals(,)}
xit ('should increase cash  when record returned', function(){
assert.strictEquals(,)}
xit ('should decrease cash when record bought', function(){
assert.strictEquals(,)}
xit ('should be able to view the total value of record collection', function(){
assert.strictEquals(,)}
xit ('should be able to view the total value of record collection by genre', function(){
assert.strictEquals(,)}
xit ('should be able to see their most valued record', function(){
assert.strictEquals(,)}
xit ('should be able to sort their records by value', function(){
assert.strictEquals(,)}
xit ('should be able to compare value of their collection with another collection', function(){
assert.strictEquals(,)}
