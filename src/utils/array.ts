import { IBook } from "../types/book";

export const clearDuplicateBooks = (arr: IBook[]) => {
  const newArr = arr.reduce((acc: IBook[], curr) => {
    if (!acc.find(item => item.id === curr.id)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return newArr;
}