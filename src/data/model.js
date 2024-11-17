export class Car {

  constructor(
      name, //String
      description, //String
      year, //Number
      colors, //String
      mileage, //Float
      horsepower, //Integer
      price, //Float
      imageUrls, //List of string 
      id // Number
  ) {
      this.name = name;
      this.description = description;
      this.year = year;
      this.colors = colors;
      this.mileage = mileage;
      this.horsepower = horsepower;
      this.price = price;
      this.id = id;
      this.imageUrls = imageUrls;
  }

  // Translate object and format usage
  getCorrectedEntries() {
      let obj = Object.assign({}, this);
      delete obj.id;
      return Object.entries(obj);
  }

  getEntries() {
      let obj = Object.assign({}, this);
      delete obj.id;
      return Object.entries(obj);
  }
}
