import { IOption } from "../types/book";

export const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

export const FETCH_BOOKS: string = "https://www.googleapis.com/books/v1/volumes?printType=books";

export const categoriesArr: IOption[] = [
  {name: "All", value: "all"},
  {name: "Art", value: "art"},
  {name: "Biography", value: "biography"},
  {name: "Computers", value: "computers"},
  {name: "History", value: "history"},
  {name: "Medical", value: "medical"},
  {name: "Poetry", value: "poetry"}
];

export const sortArr: IOption[] = [
  {name: "Relevance", value: "relevance"},
  {name: "Newest", value: "newest"}
];

export const catalogOffset: number = 0;
export const catalogLimit: number = 30;