//name
//buy record
//sell record
//collection
//cash


var Customer = function(name){
  this.name = name;
  this.cash = 50;
  this.collection = [];
  buyRecord: function(record){
    this.cash -= record.price;
    this.collection.push(record);
  }
  returnRecord: function(recordToReturn){
    this.cash += recordToReturn.price;
    this.collection = this.collection.filter(function(record){
      return record !== recordToReturn;
    })

  }
}
