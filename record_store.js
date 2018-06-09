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
  this.balance += soldRecord.price;
  this.inventory = this.inventory.filter(function(record){
    return record !== soldRecord;
  })
  return this.inventory;
};

RecordStore.prototype.finnancialSituation = function () {
  let finnancialSituation = this.balance;
  this.inventory.forEach(function(record){
    return finnancialSituation += record.price;
  })
  return finnancialSituation;
};

RecordStore.prototype.searchByGenre = function (genre) {
  return this.inventory.filter(function(record){
    return record.genre === genre;
  })
};


module.exports = RecordStore;
