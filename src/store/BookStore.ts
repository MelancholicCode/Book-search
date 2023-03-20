import { makeAutoObservable } from "mobx";
import { IBook } from "../types/book";

class BookStore {
  constructor() {
    makeAutoObservable(this);
  }
  _books: IBook[] = [];
  _query: string = "";

  setBooks(books: IBook[]) {
    this._books = books;
  }

  get books() {
    return this._books;
  }
}

export const bookStore = new BookStore();