export interface IFetchedData {
  totalItems: number;
  items: IBook[] | undefined;
}

export interface IBook {
  id: string;
  volumeInfo: {
    title: string | undefined;
    description: string | undefined;
    authors: string[] | undefined;
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