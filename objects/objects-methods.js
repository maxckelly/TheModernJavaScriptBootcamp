// Methods - A method is nothing more than an object property whose value is a function.

// The below is a function within an object. 
// You can access the function the same way you access a normal object. restaurant.checkAvailability 
// The word this - allows you to show all the properties in the object - console.log(this) will display name, capacity, count.
let restaurant = {
  name: "Grilld",
  guestCapacity: 100,
  guestCount: 0,
  checkAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  // SeatParty - This adds people to the seats
  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize
  },
  // RemoveParty - This removes people from the restraunt
  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize;
    return `We have removed ${partySize}, new count is ${this.guestCount / this.guestCapacity}`;
  }
};

restaurant.seatParty(90);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(6);
console.log(restaurant.checkAvailability(4));
