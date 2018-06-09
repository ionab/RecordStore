var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.addRecord = function(record) {
  this.inventory.push(record);
};

RecordStore.prototype.printStock = function () {
  return this.inventory.map(function(record){
    return record.printPropertiesAsString();
  })
};


RecordStore.prototype.sellRecord = function (soldRecord) {
  this.inventory = this.inventory.filter(function(record){
    return record !== soldRecord;
  })
  return this.inventory;

};


// write sell record method
module.exports = RecordStore;
