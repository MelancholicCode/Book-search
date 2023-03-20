export interface IOption {
  name: string;
  value: string;
}

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
]