
var Customer = function(name){
  this.name = name;
  this.cash = 50;
  this.collection = [];
}

Customer.prototype.buyRecord = function(record){
  if (this.cash >= record.price){
    this.cash -= record.price;
    this.collection.push(record);
  }
};

Customer.prototype.returnRecord = function(recordToReturn){
  this.cash += recordToReturn.price;
  this.collection = this.collection.filter(function(record){
    return record !== recordToReturn;
  })
}

Customer.prototype.collectionValue = function () {
  let collectionValue = 0
  this.collection.forEach(function(record){
    collectionValue += record.price;
  })
  return collectionValue;
};

Customer.prototype.collectionValueByGenre = function (genre) {
  let genreCollectionValue = 0; this.collection.forEach(function(record){
    if (record.genre === genre){
      genreCollectionValue += record.price;
    };
  })
  return genreCollectionValue;
};

Customer.prototype.recordsByValue = function () {
  return this.collection.sort(function(a, b){
    return b.price - a.price;
  })


};



module.exports = Customer;
