
var Customer = function(name){
  this.name = name;
  this.cash = 50;
  this.collection = [];
}

Customer.prototype.buyRecord = function(record){
  this.cash -= record.price;
  this.collection.push(record);
};

Customer.prototype.returnRecord = function(recordToReturn){
  this.cash += recordToReturn.price;
  this.collection = this.collection.filter(function(record){
    return record !== recordToReturn;
  })

}

module.exports = Customer;
