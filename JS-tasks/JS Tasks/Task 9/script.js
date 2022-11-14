/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(Title, director, budget = 0) {
    this.Title = String(Title);
    this.director = String(director);
    this.budget = Number(budget);
  }
  wasExpensive() {
    if (this.budget > 100000000) {
      return console.log("true");
    } else {
      return console.log("false");
    }
  }
}

const newMovie = new Movie("Titanikas", "Aleksas Briliovas", 1000000000004);
console.log(newMovie);
newMovie.wasExpensive();
