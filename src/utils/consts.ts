import { IOption } from "../types/book";

export const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

export const FETCH_BOOKS: string = "https://www.googleapis.com/books/v1/volumes?printType=books";
export const FETCH_BOOK: string = "https://www.googleapis.com/books/v1/volumes";

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

export const messageImgs = {
  main: 'https://fsd.multiurok.ru/html/2022/11/05/s_63668557d8a08/phpyelx8o_pro-knigu_html_98f0b70cc69b1d.jpg',
  error: 'https://www.pngarea.com/pngm/31/5712127_pusheen-png-pusheen-i-am-sorry-gif-png.png',
  empty: 'https://www.pngarea.com/pngm/31/5712127_pusheen-png-pusheen-i-am-sorry-gif-png.png'
}