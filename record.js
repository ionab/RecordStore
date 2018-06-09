// - Create a Record object that has an Artist, Title, Genre, and Price
// - Create a Record Store that has a Name, City and an Inventory.
// - Give the Record Store a Balance.
// - Add some Records to the Store's Inventory.

var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.printPropertiesAsString = function () {
  return "Artist: " + this.artist + ", Title: " + this.title + ", Genre: " + this.genre + ", Price: " + this.price ;

};
module.exports = Record;
