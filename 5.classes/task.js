"use strict"

//Задача №1. Печатное издание
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }

    set state(state) {
        if (state > 100) {
            this._state = 100;
        } else if (state < 0) {
            this._state = 0;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}


class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

//Задача №2. Библиотека
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			return this.books.push(book);
		}
	}

	findBookBy(type, value) {
        let bookIndex = this.books.findIndex((item) => item[type] === value);
        return this.books[bookIndex] = (bookIndex != -1) ? this.books[bookIndex] : null;
      }

      giveBookByName(bookName) {
        let bookIndex = this.books.findIndex((item) => item.name === bookName);
        if (bookIndex != -1) {
          let bookReturn = this.books[bookIndex];
          this.books.splice([bookIndex], [1]);
          return bookReturn;
        } else {
          return null;
        }
	}
}
