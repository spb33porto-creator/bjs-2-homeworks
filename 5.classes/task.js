// Task 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
  }

  set state(value) {
      if (value <= 0) this._state = 0;
      else if (value >= 100) this._state = 100;
      else this._state = value;
  }

  get state() {
      return this._state;
  }

  fix() {
      if (this.state > 0 && this.state < 100)
          this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'detective';
  }
}

// Task 2
class Library {
  constructor(name) {
      this.name = name;
      this.books = [];
  }

  addBook(book) {
      if (book.state > 30) this.books.push(book);
  }

  findBookBy(type, value) {
      for (let book of this.books) {
          if (book[type] === value) return book;
      }
      return null;
  }

  giveBookByName(bookName) {
      const index = this.books.findIndex(b => b.name === bookName);
      if (index !== -1) {
          return this.books.splice(index, 1)[0];
      }
      return null;
  }
}

// Task 3
class Student {
  constructor(name) {
      this.name = name;
      this.marks = {};
  }

  addMark(mark, subject) {
      if (mark < 2 || mark > 5) return;
      if (!this.marks[subject]) this.marks[subject] = [];
      this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
      if (!this.marks[subject]) return 0;
      const sum = this.marks[subject].reduce((acc, curr) => acc + curr, 0);
      return sum / this.marks[subject].length;
  }

  getAverage() {
      let totalSum = 0;
      let countSubjects = 0;
      for (let subj in this.marks) {
          totalSum += this.getAverageBySubject(subj);
          countSubjects++;
      }
      return totalSum / countSubjects;
  }
}