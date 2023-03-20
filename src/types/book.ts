export interface IFetchedData {
  totalItems: number;
  items: IBook[];
}

export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[] | undefined;
    imageLinks: {
      thumbnail: string;
    }
  }
}

export interface IOption {
  name: string;
  value: string;
}