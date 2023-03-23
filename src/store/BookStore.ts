import { makeAutoObservable } from "mobx";
import { IBook } from "../types/book";
import { clearDuplicateBooks } from "../utils/array";

class BookStore {
  constructor() {
    makeAutoObservable(this);
  }
  _books: IBook[] = [];
  _url: string | null = null;

  setBooks(books: IBook[]) {
    // Удаляем дубликаты книг для лучшей работы списков
    this._books = clearDuplicateBooks(books);
  }
  addBooks(books: IBook[]) {
    // Удаляем дубликаты книг для лучшей работы списков
    this._books = clearDuplicateBooks([...this._books, ...books]);
  }
  setUrl(url: string) {
    this._url = url;
  }

  get books() {
    return this._books;
  }
  get url() {
    return this._url;
  }
}

export const bookStore = new BookStore();