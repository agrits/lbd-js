
/**
 * This method/function should count the amount of food that should be
 * acquired for the coming week.
 * @param animalNumber the number of animals in the zoo
 * @param foodAvg the average amount of food (in kilograms) eaten by the savage animals
 * 				each week
 * @return amount of food that should be acquired for the coming
 * 				 week, or -1 if the animalNumber or foodAvg are less than 0 or non-numeric
 */
function countFoodRequired(animalNumber, foodAvg) {
  var animalNumber = parseInt(animalNumber)
  var foodAvg = parseInt(foodAvg)
  if(!animalNumber || !foodAvg || animalNumber < 0 || foodAvg < 0){
    return -1
  }
  return animalNumber*foodAvg

}

/**
 * Figures out which day had the most number of people visiting the
 * zoo. If more than one day has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Saturday", "Sunday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of day objects
 * @return Array string containing the name of the most popular day of if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */

function getMostTraffic(week) {
  if(!week || week.length == 0){
    return null
  }
  var maxVisits = 0
  var mostPopular = week.map(currDay => {
                      if(currDay.traffic > maxVisits){
                        maxVisits = currDay.traffic
                      }
                      return currDay
                    }).filter(currDay => currDay.traffic == maxVisits)
                      .map(currDay => currDay.name)

  return mostPopular.length > 1 ? mostPopular : mostPopular[0]

}


/**
 * When provided with three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Lion", "Tiger", "Parrot")
 * @param breeds the array of animal breeds
 * @return Array array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
  if(!breeds || !types || !names){
    return []
  }

  if(names.length !== types.length || types.length !== breeds.length){
    return []
  }

  return [...Array(names.length).keys()].map(i => new Animal(names[i], types[i], breeds[i]))
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create day objects
 */
function day (name, traffic) {
  this.name = name;
  this.traffic = traffic;
}

/**
 * A prototype to create Goods objects
 */
function Goods (name, barcode, sellPrice, buyPrice) {
  this.name = name;
  this.barcode = barcode;
  this.sellPrice = sellPrice;
  this.buyPrice = buyPrice;
}
/**
 * A prototype to create Animal objects
 */
function Animal (name, type, breed) {
  this.name = name;
  this.type = type;
  this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
  return 'hello world!';
}

var assert = require("assert");

describe('countFoodRequired', ()=> {
  it('countFoodRequired should calculate amount of food to order when inputs are positive numbers', () => {
    var test = countFoodRequired(10,  3);
    var expected = 30;
    assert(test === expected);
  });
  it('countFoodRequired should return -1 when animalNumber < 0', () => {
    var test = countFoodRequired(-1,  1);
    var expected = -1;
    assert(test === expected);
  });
  it('countFoodRequired should return -1 when animalNumber is non-numeric', () => {
    var test = countFoodRequired('dog',  1);
    var expected = -1;
    assert(test === expected);
  });
  it('countFoodRequired should return -1 when foodAvg < 0', () => {
    var test = countFoodRequired(1,  -1);
    var expected = -1;
    assert(test === expected);
  });
  it('countFoodRequired should return -1 when foodAvg is non-numeric', () => {
    var test = countFoodRequired(1,  'dog');
    var expected = -1;
    assert(test === expected);
  });
});

describe('getMostTraffic', ()=> {
  it('getMostTraffic should return day with maximal traffic when one day has most traffic', () => {
    var day1 = new day("Sunday", 100);
    var day2 = new day("Monday", 200);
    var day4 = new day("Wednesday", 300);
    var day3 = new day("Tuesday", 150);
    var week = [day1, day2, day3, day4];
    var expected = "Wednesday";
    var test = getMostTraffic(week);
    assert(test === expected);
  });
  it('getMostTraffic should return an array of days when more than one day has most popular traffic',
      () => {
        var day1 = new day("Sunday", 100);
        var day2 = new day("Monday", 300);
        var day4 = new day("Wednesday", 300);
        var day3 = new day("Tuesday", 150);
        var week = [day1, day2, day3, day4];
        var test = getMostTraffic(week);
        assert(test.length == 2);
        assert(test.indexOf("Monday") != -1);
        assert(test.indexOf("Wednesday") != -1);
        //assert(test.indexOf("Sunday") == -1);
        //assert(test.indexOf("Tuesday") == -1);
      });
  it('getMostTraffic should return null when input array is empty',
      () => {
        var week = [];
        var test = getMostTraffic(week);
        assert(test === null);
      });
  it('getMostTraffic should return null when input array is null',
      () => {
        var test = getMostTraffic(null);
        assert(test === null);
      });
});


describe('createAnimalObjects', () => {
  it('createAnimalObjects should return an array of one animal object when each array has one value',  () => {
    var animal1 = new Animal("Lola", "Dog", "Golden Retriever");
    var test = createAnimalObjects(["Lola"], ["Dog"], ["Golden Retriever"]);
    assert(test[0].name === animal1.name);
    assert(test[0].type === animal1.type);
    assert(test[0].breed === animal1.breed);
  });
  it('createAnimalObjects should return an array of two animal objects when each array has two values',  () => {
    var animal1 = new Animal("Lola", "Dog", "Golden Retriever");
    var animal2 = new Animal("Sprinkles", "Dog", "Pitbull");
    var test = createAnimalObjects(["Lola", "Sprinkles"], ["Dog", "Dog"], ["Golden Retriever", "Pitbull"]);
    assert(test[0].name === animal1.name);
    assert(test[0].type === animal1.type);
    assert(test[0].breed === animal1.breed);
    assert(test[1].name === animal2.name);
    assert(test[1].type === animal2.type);
    assert(test[1].breed === animal2.breed);
  });
  it('createAnimalObjects should return an empty array when input array lengths are unequal',  () => {
    var animal1 = new Animal("Lola", "Dog", "Golden Retriever");
    var test = createAnimalObjects(["Lola"], ["Dog", "Dog"], ["Golden Retriever"]);
    assert(test.length === 0);
  });
  it('createAnimalObjects should return an empty array when input array lengths are 0',  () => {
    var test = createAnimalObjects([], [], []);
    assert(test.length === 0);
  });
  it('createAnimalObjects should return an empty array when first input is null',  () => {
    var test = createAnimalObjects(null, ["Dog"], ["Beagle"]);
    assert(test.length === 0);
  });
  it('createAnimalObjects should return an empty array when second input is null',  () => {
    var test = createAnimalObjects(["Snoopy"], null, ["Beagle"]);
    assert(test.length === 0);
  });
  it('createAnimalObjects should return an empty array when third input is null',  () => {
    var test = createAnimalObjects(["Snoopy"], ["Dog"], null);
    assert(test.length === 0);
  });
})
