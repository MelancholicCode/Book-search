import { makeAutoObservable } from "mobx";
import { IBook, IOption } from "../types/book";
import { clearDuplicateBooks } from "../utils/array";
import { categoriesArr } from "../utils/consts";

class BookStore {
  constructor() {
    makeAutoObservable(this);
  }
  _books: IBook[] = [];
  _url: string | null = null;
  _category: IOption = categoriesArr[0];

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
  setCategoryValue(value: string) {
    const category = categoriesArr.find(item => item.value === value);
    if (category) this._category = category;
  }

  get books() {
    return this._books;
  }
  get url() {
    return this._url;
  }
  get category() {
    return this._category;
  }
}

export const bookStore = new BookStore();