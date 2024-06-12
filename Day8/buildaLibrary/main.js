class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      let ratingSum = this._ratings.reduce((currentSum, rating) => {
        return currentSum + rating;
      }, 0);
  
      const lengthOfRatings = this._ratings.length;
      let averageRating = ratingSum / lengthOfRatings;
      return averageRating;
    }
  
    addRating(newRating) {
      if (newRating > 0 && newRating <= 5) {
        this._ratings.push(newRating);
      }
    }
  
    set isCheckedOut(checked) {
      this._isCheckedOut = checked;
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._title = title;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._title = title;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get title() {
      return this._title;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._title = title;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  
    get title() {
      return this._title;
    }
  
    get songs() {
      return this._songs;
    }
  }
  
  const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
  );
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie("Jan de Bont", "Speed", 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  