var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  it("Testing Gilded rose", function() {
    const items = [
      new Item("+5 Dexterity Vest", 5, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 7, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Conjured Mana Cake", 3, 6),
      new Item("Conjured Mana Cake", 20, 10),
    ];
    
    const days = Number(process.argv[10]) || 10;
    const gildedRose = new Shop(items);
    
    console.log("OMGHAI!");
    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
      gildedRose.updateQuality();
    }
  });

});